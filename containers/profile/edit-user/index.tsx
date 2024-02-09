'use client';

import { usePathname, useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { editProfileUser } from '@/actions/user';
import { Button } from '@/components/ui/button';
import { FormContext, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ROUTES_NAME } from '@/constants/routes';
import { UserInfoSchema } from '@/containers/authentication/schema';
import { FormProfileSchema } from '@/containers/profile/schema';

interface ComponentProps {
  user: string;
  clerkId: string;
}

const EditProfile = ({ user, clerkId }: ComponentProps) => {
  const userParsed = UserInfoSchema.parse(JSON.parse(user));
  const router = useRouter();
  const pathname = usePathname();

  const form = useForm<z.infer<typeof FormProfileSchema>>({
    resolver: zodResolver(FormProfileSchema),
    defaultValues: {
      name: userParsed.name || '',
      username: userParsed.username || '',
      location: userParsed.location || '',
      portfolioWebsite: userParsed.portfolioWebsite || '',
      bio: userParsed.bio || '',
    },
  });

  const mutateEditProfile = useMutation({
    mutationFn: editProfileUser,
    onSuccess: () => {
      router.push(`${ROUTES_NAME.PROFILE}/${clerkId}`);
    },
  });

  const onSubmit = (data: z.infer<typeof FormProfileSchema>) => {
    mutateEditProfile.mutate({
      clerkId,
      path: pathname,
      updateData: data,
    });
  };

  return (
    <FormContext {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="rounded-md border p-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="mb-2">Name*</FormLabel>
              <FormControl>
                <Input placeholder="Enter your name" {...field} />
              </FormControl>

              <FormMessage className="mt-1" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem className="mt-6">
              <FormLabel className="mb-2">Username*</FormLabel>
              <FormControl>
                <Input placeholder="Enter your username" {...field} />
              </FormControl>

              <FormMessage className="mt-1" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="portfolioWebsite"
          render={({ field }) => (
            <FormItem className="mt-6">
              <FormLabel className="mb-2">Portfolio Link</FormLabel>
              <FormControl>
                <Input placeholder="Enter your portfolio link" {...field} />
              </FormControl>

              <FormMessage className="mt-1" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="location"
          render={({ field }) => (
            <FormItem className="mt-6">
              <FormLabel className="mb-2">Location</FormLabel>
              <FormControl>
                <Input placeholder="Enter your location" {...field} />
              </FormControl>

              <FormMessage className="mt-1" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="bio"
          render={({ field }) => (
            <FormItem className="mt-6">
              <FormLabel className="mb-2">Bio</FormLabel>
              <FormControl>
                <Textarea placeholder="Enter your location" {...field} className="min-h-[100px]" />
              </FormControl>
              <FormMessage className="mt-1" />
            </FormItem>
          )}
        />

        <div className="mt-10 flex items-center justify-between space-x-4">
          <Button variant="outline" type="button" onClick={() => router.back()} disabled={mutateEditProfile.isPending}>
            Cancel
          </Button>
          <Button variant="primary" isLoading={mutateEditProfile.isPending} disabled={mutateEditProfile.isPending}>
            Save Changes
          </Button>
        </div>
      </form>
    </FormContext>
  );
};

export default EditProfile;
