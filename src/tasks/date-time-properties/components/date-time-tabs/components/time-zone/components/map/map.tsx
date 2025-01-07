import { FC } from "react";
import { useWatch } from "react-hook-form";

import { TIME_ZONES } from "@providers/date-time-provider/constants";
import { TimeZoneID } from "@providers/date-time-provider/types";

import { DATE_TIME_FORM_NAME_KEYS } from "@tasks/date-time-properties/form/types";

import styles from "./map.module.scss";

export const Map: FC = () => {
  const timeZone: TimeZoneID = useWatch({
    name: DATE_TIME_FORM_NAME_KEYS.TIME_ZONE,
  });

  const { image } = TIME_ZONES[timeZone];

  return (
    <div className={styles.mapContainer}>
      <img src={image} className={styles.map} />
    </div>
  );
};
