/** Ad slot placeholder - replace with real ad network (e.g. Google AdSense, Mediavine) when approved */
export function AdSlot({
  type = "banner",
  className = "",
}: {
  type?: "banner" | "sidebar" | "in-content"
  className?: string
}) {
  const styles = {
    banner: "min-h-[90px]",
    sidebar: "min-h-[250px]",
    "in-content": "min-h-[280px] my-8",
  }

  const sizeLabel =
    type === "banner" ? "728×90" : type === "sidebar" ? "300×250" : "Ad Space"

  return (
    <div
      className={`${styles[type]} ${className} relative flex items-center justify-center overflow-hidden rounded-2xl border border-card-border/50 bg-gradient-to-br from-card-bg/80 via-card-bg/40 to-accent/5 text-center`}
    >
      {/* Brand logo placeholder */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.04] pointer-events-none select-none">
        <span className="text-[6rem] font-black tracking-tighter text-foreground" translate="no">
          LootNestX
        </span>
      </div>

      <div className="relative z-10 space-y-2">
        <div className="mx-auto flex items-center justify-center gap-1.5">
          <span className="text-lg font-bold text-foreground/80" translate="no">LootNest</span>
          <span className="rounded bg-accent px-1 text-xs font-black text-black">X</span>
        </div>
        <p className="text-[11px] font-medium uppercase tracking-widest text-muted/40">
          Your Ad Here
        </p>
        <p className="text-[10px] text-muted/20">
          {sizeLabel}
        </p>
      </div>
    </div>
  )
}