import { Container } from "@/components/ui/container";

export default function Loading() {
  return (
    <main aria-busy="true" aria-live="polite" className="route-loading" id="home">
      <Container>
        <span aria-hidden="true" className="route-loading__spinner" />
        <p>Loading page…</p>
      </Container>
    </main>
  );
}
