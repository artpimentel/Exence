import Catalog from "./ProductsRow";
import type { Producer } from "../../types/Producer";

interface HighlightsCatalogProps {
  producers: Producer[];
}

export default function HighlightsCatalog({
  producers,
}: HighlightsCatalogProps) {
  return <Catalog producers={producers} title="Top" maxItems={10} highlight />;
}
