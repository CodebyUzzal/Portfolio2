'use client';
import { useState } from 'react';
import { Section } from '@/components/section';
import { Container } from '@/components/container';
import { Button } from '@/components/ui/button';
import { site } from '@/data/site';

export default function ContactPage() {
  const [status, setStatus] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(Object.fromEntries(formData)),
    });
    setStatus(res.ok ? 'sent' : 'error');
  }

  return (
    <Section>
      <Container className="max-w-md space-y-4">
        <form onSubmit={onSubmit} className="space-y-4">
          <input
            name="name"
            required
            placeholder="Name"
            className="w-full rounded-md border border-gray-700 bg-transparent p-2"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Email"
            className="w-full rounded-md border border-gray-700 bg-transparent p-2"
          />
          <textarea
            name="message"
            required
            placeholder="Message"
            className="h-32 w-full rounded-md border border-gray-700 bg-transparent p-2"
          />
          <Button type="submit">Send</Button>
        </form>
        {status === 'sent' && (
          <p className="text-sm text-plum-400">Message sent!</p>
        )}
        {status === 'error' && (
          <p className="text-sm text-red-500">
            Could not send.{' '}
            <a href={`mailto:${site.social.email}`} className="underline">
              Email me
            </a>{' '}
            instead.
          </p>
        )}
      </Container>
    </Section>
  );
}
