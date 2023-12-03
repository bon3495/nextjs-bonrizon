/* eslint-disable no-console */
/* eslint-disable camelcase */
import { headers } from 'next/headers';
import { NextResponse } from 'next/server';
import { WebhookEvent } from '@clerk/nextjs/server';
import { Webhook } from 'svix';

import { createUser, deleteUser, updateUser } from '@/actions/user';
import { ROUTES_NAME } from '@/constants/routes';

export async function POST(req: Request) {
  // You can find this in the Clerk Dashboard -> Webhooks -> choose the webhook
  const WEBHOOK_SECRET = process.env.NEXT_CLERK_WEBHOOK_SECRET;

  if (!WEBHOOK_SECRET) {
    throw new Error('Please add WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local');
  }

  // Get the headers
  const headerPayload = headers();
  const svix_id = headerPayload.get('svix-id');
  const svix_timestamp = headerPayload.get('svix-timestamp');
  const svix_signature = headerPayload.get('svix-signature');

  // If there are no headers, error out
  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response('Error occured -- no svix headers', {
      status: 400,
    });
  }

  // Get the body
  const payload = await req.json();
  const body = JSON.stringify(payload);

  // Create a new Svix instance with your secret.
  const wh = new Webhook(WEBHOOK_SECRET);

  let evt: WebhookEvent;

  // Verify the payload with the headers
  try {
    evt = wh.verify(body, {
      'svix-id': svix_id,
      'svix-timestamp': svix_timestamp,
      'svix-signature': svix_signature,
    }) as WebhookEvent;
  } catch (err) {
    console.error('Error verifying webhook:', err);
    return new Response('Error occured', {
      status: 400,
    });
  }

  const eventType = evt.type;

  if (eventType === 'user.created') {
    const {
      email_addresses: [{ email_address }],
      id,
      first_name,
      last_name,
      image_url,
      username,
      gender,
      birthday,
    } = evt.data;

    const newUser = await createUser({
      clerkId: id,
      email: email_address,
      name: `${first_name}${last_name ? ` ${last_name}` : ''}`,
      picture: image_url,
      username: username!,
      gender,
      birthday,
    });

    return NextResponse.json({
      message: 'User created!',
      data: {
        user: newUser,
      },
    });
  }

  if (eventType === 'user.updated') {
    const {
      email_addresses: [{ email_address }],
      id,
      first_name,
      last_name,
      image_url,
      username,
      gender,
      birthday,
    } = evt.data;

    const updatedUser = await updateUser({
      clerkId: id,
      updateData: {
        email: email_address,
        name: `${first_name}${last_name ? ` ${last_name}` : ''}`,
        picture: image_url,
        username: username!,
        gender,
        birthday,
      },
      path: `${ROUTES_NAME.PROFILE}/${id}`,
    });

    return NextResponse.json({
      message: 'User updated!',
      data: { user: updatedUser },
    });
  }

  if (eventType === 'user.deleted') {
    const { id } = evt.data;

    await deleteUser(id!);

    return NextResponse.json({
      message: 'User deleted!',
    });
  }

  return new Response('', { status: 200 });
}
