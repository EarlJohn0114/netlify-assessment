import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const SiteCreation = () => {
  return (
    <section id="site" className="section-padding">
      <div className="container max-w-4xl">
        <h2 className="mb-8">Site Creation</h2>
        <Card>
          <CardHeader>
            <CardTitle>How I Built This Website</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              I built this website using <span className="font-semibold text-foreground">React</span> with <span className="font-semibold text-foreground">TypeScript</span>, 
              styled with <span className="font-semibold text-foreground">Tailwind CSS</span>, and deployed via <span className="font-semibold text-foreground">Netlify</span>. 
              I chose this stack because it offers a perfect balance of developer experience, performance, and deployment simplicity. 
              React's component architecture makes the code maintainable and scalable, TypeScript adds type safety that catches errors early, 
              and Tailwind provides utility-first styling that's both fast to write and consistent.
            </p>
            <p>
              The most significant challenge I encountered was configuring <span className="font-semibold text-foreground">build optimization</span>. 
              Initially, my deployment failed due to a module resolution issue where the build process couldn't find certain imported components. 
              The error message was cryptic: "Cannot find module '@/components/ui/card'". I solved this by:
            </p>
            <ol className="list-decimal list-inside space-y-2 ml-4">
              <li>Checking my tsconfig.json path aliases were correctly configured</li>
              <li>Ensuring Vite's resolve.alias matched the TypeScript paths</li>
              <li>Verifying all imports used consistent casing (case-sensitivity matters in production builds)</li>
              <li>Clearing the build cache and node_modules, then reinstalling dependencies</li>
            </ol>
            <p>
              This taught me the importance of testing the production build locally using <code className="bg-code-bg text-code-foreground px-2 py-1 rounded">npm run build && npm run preview</code> before deploying, 
              as development and production environments can behave differently.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default SiteCreation;
