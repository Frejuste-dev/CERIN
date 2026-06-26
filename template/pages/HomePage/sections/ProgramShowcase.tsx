import {
  EnhancedHero,
  TrustStatsSection,
  TestimonialCarousel,
  ProgramCardsGrid,
  FinalCtaBanner,
  QuickNav,
  News,
} from "../../../components";
import { usePrograms } from "../../../hooks/usePrograms";

export function ProgramShowcase() {
  const { data: programs, loading } = usePrograms();

  return (
    <div id="formations" className="py-2">
      {!loading && <ProgramCardsGrid programs={programs} />}
      {loading && (
        <div className="flex justify-center py-20">
          <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
    </div>
  );
}
