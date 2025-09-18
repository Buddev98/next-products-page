import Image from 'next/image';
import { Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Product } from '@/types/product';

interface ProductListItemProps {
  product: Product;
}

export default function ProductListItem({ product }: ProductListItemProps) {
  return (
    <div className="flex flex-col gap-4 rounded-lg border p-4 sm:flex-row">
      <div className="relative h-40 w-full overflow-hidden rounded-md sm:h-32 sm:w-32">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
        />
        {product.isNew && (
          <Badge className="absolute left-2 top-2">New</Badge>
        )}
        {product.discount > 0 && (
          <Badge variant="destructive" className="absolute right-2 top-2">
            {product.discount}% OFF
          </Badge>
        )}
      </div>
      <div className="flex flex-1 flex-col">
        <div className="space-y-1">
          <div className="flex items-start justify-between">
            <h3 className="font-medium">{product.name}</h3>
            <Button 
              size="icon" 
              variant="ghost" 
              className="h-8 w-8 rounded-full"
            >
              <Heart className="h-4 w-4" />
              <span className="sr-only">Add to wishlist</span>
            </Button>
          </div>
          <p className="text-xs text-muted-foreground">{product.category}</p>
          <p className="line-clamp-2 text-sm text-muted-foreground">{product.description}</p>
        </div>
        <div className="mt-auto flex items-center justify-between pt-4">
          <div className="flex items-center gap-2">
            {product.discount > 0 ? (
              <>
                <span className="text-lg font-medium">${(product.price * (1 - product.discount / 100)).toFixed(2)}</span>
                <span className="text-sm text-muted-foreground line-through">${product.price.toFixed(2)}</span>
              </>
            ) : (
              <span className="text-lg font-medium">${product.price.toFixed(2)}</span>
            )}
            <div className="ml-2 flex items-center text-sm">
              <span className="text-amber-500">★</span>
              <span className="ml-1">{product.rating}</span>
            </div>
          </div>
          <Button>Add to Cart</Button>
        </div>
      </div>
    </div>
  );
}
