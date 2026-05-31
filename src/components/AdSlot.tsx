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

  return (
    <div
      className={`${styles[type]} ${className} flex items-center justify-center rounded-2xl border border-dashed border-card-border bg-card-bg/50 text-center`}
    >
      <div className="space-y-1">
        <p className="text-xs font-medium uppercase tracking-wider text-muted/50">
          Advertisement
        </p>
        <p className="text-[10px] text-muted/30">
          {type === "banner" ? "728×90" : type === "sidebar" ? "300×250" : "Ad Space"}
        </p>
      </div>
    </div>
  )
}