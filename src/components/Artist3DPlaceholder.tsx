
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Artist3DPlaceholder = () => {
  return (
    <div className="relative w-full h-96 flex items-center justify-center">
      <Card className="glass p-8 text-center max-w-md">
        <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center">
          <span className="text-4xl">🎨</span>
        </div>
        <h3 className="text-xl font-handwritten font-bold mb-2">3D Artist Studio</h3>
        <p className="text-muted-foreground mb-4 text-sm">
          Interactive 3D model coming soon. Experience our virtual artist workspace.
        </p>
        <Button variant="outline" className="glass">
          <span className="mr-2">🖌️</span>
          Explore Studio
        </Button>
      </Card>
    </div>
  );
};

export default Artist3DPlaceholder;
