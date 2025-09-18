import Image from 'next/image';
import { Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Product } from '@/types/product';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform hover:scale-105"
        />
        {product.isNew && (
          <Badge className="absolute left-2 top-2">New</Badge>
        )}
        {product.discount > 0 && (
          <Badge variant="destructive" className="absolute right-2 top-2">
            {product.discount}% OFF
          </Badge>
        )}
        <Button 
          size="icon" 
          variant="ghost" 
          className="absolute right-2 bottom-2 h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm"
        >
          <Heart className="h-4 w-4" />
          <span className="sr-only">Add to wishlist</span>
        </Button>
      </div>
      <CardContent className="p-4">
        <div className="space-y-1">
          <h3 className="font-medium line-clamp-1">{product.name}</h3>
          <p className="text-xs text-muted-foreground">{product.category}</p>
        </div>
        <div className="mt-2 flex items-center justify-between">
          <div className="flex items-center gap-1">
            {product.discount > 0 ? (
              <>
                <span className="font-medium">${(product.price * (1 - product.discount / 100)).toFixed(2)}</span>
                <span className="text-xs text-muted-foreground line-through">${product.price.toFixed(2)}</span>
              </>
            ) : (
              <span className="font-medium">${product.price.toFixed(2)}</span>
            )}
          </div>
          <div className="flex items-center text-sm">
            <span className="text-amber-500">★</span>
            <span className="ml-1">{product.rating}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button className="w-full">Add to Cart</Button>
      </CardFooter>
    </Card>
  );
}
