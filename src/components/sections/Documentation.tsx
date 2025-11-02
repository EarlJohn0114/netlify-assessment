import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const Documentation = () => {
  return (
    <section id="docs" className="section-padding bg-muted/30">
      <div className="container max-w-4xl">
        <h2 className="mb-8">Documentation Example</h2>
        <Card>
          <CardHeader>
            <CardTitle>Stripe API Documentation</CardTitle>
            <Button variant="link" className="w-fit p-0 h-auto" asChild>
              <a href="https://stripe.com/docs/api" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                Visit Stripe Docs <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              I consider the <span className="font-semibold text-foreground">Stripe API documentation</span> to be exceptional. Here's why:
            </p>
            
            <div className="space-y-3">
              <div>
                <h4 className="font-semibold text-foreground mb-2">1. Interactive Code Examples</h4>
                <p>
                  Every endpoint includes live, runnable code snippets in multiple languages (cURL, Ruby, Python, PHP, Node, etc.). 
                  You can copy-paste and it just works. The examples use realistic data and show both requests and responses.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-2">2. Clear Visual Hierarchy</h4>
                <p>
                  The sidebar navigation is intuitive, parameters are clearly marked as required/optional with data types, 
                  and errors are documented with specific codes and how to handle them.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-2">3. Progressive Disclosure</h4>
                <p>
                  Basic usage is shown first, then advanced options are expandable. You're not overwhelmed with every possible parameter upfront, 
                  but everything is there when you need it.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-2">4. Real-World Context</h4>
                <p>
                  Beyond raw API references, they include guides for common use cases (subscriptions, payment intents, webhooks) 
                  that show how multiple API calls work together to solve real business problems.
                </p>
              </div>
            </div>

            <p className="pt-2">
              The combination of technical accuracy, practical examples, and thoughtful UX makes it the gold standard for developer documentation.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Documentation;
