import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";

const DNS = () => {
  return (
    <section id="dns" className="section-padding">
      <div className="container max-w-4xl">
        <h2 className="mb-8">DNS Configuration Challenges</h2>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-primary" />
              The Two Biggest DNS Challenges for Non-Technical Users
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 text-muted-foreground">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">1. Understanding Propagation Delays</h3>
              <p className="mb-3">
                When someone updates DNS records, they expect immediate results – like changing a setting and seeing it work instantly. 
                But DNS changes can take anywhere from minutes to 48 hours to fully propagate across the internet. This delay is invisible and confusing.
              </p>
              <p>
                For example, a user might correctly point their domain to Netlify's servers, refresh their browser, see it still doesn't work, 
                and assume they made a mistake. They might change the settings again or open a support ticket, when really they just needed to wait. 
                The lack of feedback ("is it propagating? is it broken?") creates anxiety and unnecessary troubleshooting.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">2. Record Type Confusion (A, CNAME, ALIAS, etc.)</h3>
              <p className="mb-3">
                DNS record types use technical jargon that's not self-explanatory. Users see options like "A record," "CNAME," "ALIAS," "AAAA" 
                and have no context for what these mean or when to use which one. Documentation might say "add a CNAME record," but their 
                domain registrar uses different terminology or requires information in a different format.
              </p>
              <p>
                For instance, someone trying to connect <code className="bg-code-bg text-code-foreground px-2 py-1 rounded">www.example.com</code> to 
                Netlify might not understand that <code className="bg-code-bg text-code-foreground px-2 py-1 rounded">www</code> (subdomain) uses a CNAME, 
                but the apex domain <code className="bg-code-bg text-code-foreground px-2 py-1 rounded">example.com</code> traditionally requires an A record. 
                Some registrars support ALIAS records, others don't. The user just wants their domain to work – they shouldn't need to become a DNS expert to make that happen.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default DNS;
