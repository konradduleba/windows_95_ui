import { Trans } from "@lingui/react";

import { MONTHS } from "../translations";

export const MONTH_LIST = [
  <Trans id={MONTHS.JANUARY.id} />,
  <Trans id={MONTHS.FEBRUARY.id} />,
  <Trans id={MONTHS.MARCH.id} />,
  <Trans id={MONTHS.APRIL.id} />,
  <Trans id={MONTHS.MAY.id} />,
  <Trans id={MONTHS.JUNE.id} />,
  <Trans id={MONTHS.JULY.id} />,
  <Trans id={MONTHS.AUGUST.id} />,
  <Trans id={MONTHS.SEPTEMBER.id} />,
  <Trans id={MONTHS.OCTOBER.id} />,
  <Trans id={MONTHS.NOVEMBER.id} />,
  <Trans id={MONTHS.DECEMBER.id} />,
] as const;
