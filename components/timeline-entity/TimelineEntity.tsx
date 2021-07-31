import styles from "./timelineentity.module.scss";

interface TimelineEntityProps {
  company: string;
  period: string;
}

export default function TimelineEntity({
  company,
  period,
}: TimelineEntityProps) {
  return (
    <div className={styles.timelineEntity}>
      <p>{company}</p>
      <p>{period}</p>
    </div>
  );
}
