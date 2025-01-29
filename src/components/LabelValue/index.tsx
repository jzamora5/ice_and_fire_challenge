interface LabelItemProps {
  label: string;
  value: string;
  className?: string;
}

export default function LabelValue({
  value,
  label,
  className,
}: LabelItemProps) {
  return (
    <p className={className}>
      <span className="font-bold">{label}:</span> <span>{value || "--"}</span>
    </p>
  );
}
