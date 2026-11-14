"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Page rendering error:", error);
  }, [error]);

  return (
    <main className="course-not-found" id="home">
      <Container className="course-not-found__inner" role="alert">
        <p className="eyebrow">Something went wrong</p>
        <h1>This page couldn’t be loaded.</h1>
        <p>Please try again. If the problem continues, return to the homepage.</p>
        <Button onClick={reset} type="button">Try again</Button>
      </Container>
    </main>
  );
}
