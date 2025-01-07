import { v4 as uuidv4 } from "uuid";

import { Trans } from "@lingui/react";

import { TimeGMT, TimeZone } from "../types";

import { TIME_ZONES as Zones } from "../translations";

const getTimeZoneImage = (GMT: TimeGMT) => {
  return `/time-zones/${GMT}.png`;
};

const _GMT12: TimeZone = {
  id: uuidv4(),
  image: getTimeZoneImage(TimeGMT._GMT12),
  name: <Trans id={Zones._GMT12.id} values={{ delay: TimeGMT._GMT12 }} />,
};

const _GMT11: TimeZone = {
  id: uuidv4(),
  image: getTimeZoneImage(TimeGMT._GMT11),
  name: <Trans id={Zones._GMT11.id} values={{ delay: TimeGMT._GMT11 }} />,
};

const _GMT10: TimeZone = {
  id: uuidv4(),
  image: getTimeZoneImage(TimeGMT._GMT10),
  name: <Trans id={Zones._GMT10.id} values={{ delay: TimeGMT._GMT10 }} />,
};

const _GMT9: TimeZone = {
  id: uuidv4(),
  image: getTimeZoneImage(TimeGMT._GMT9),
  name: <Trans id={Zones._GMT9.id} values={{ delay: TimeGMT._GMT9 }} />,
};

const _GMT8: TimeZone = {
  id: uuidv4(),
  image: getTimeZoneImage(TimeGMT._GMT8),
  name: <Trans id={Zones._GMT8.id} values={{ delay: TimeGMT._GMT8 }} />,
};

const _GMT7_1: TimeZone = {
  id: uuidv4(),
  image: getTimeZoneImage(TimeGMT._GMT7),
  name: <Trans id={Zones._GMT7_1.id} values={{ delay: TimeGMT._GMT7 }} />,
};

const _GMT7_2: TimeZone = {
  id: uuidv4(),
  image: getTimeZoneImage(TimeGMT._GMT7),
  name: <Trans id={Zones._GMT7_2.id} values={{ delay: TimeGMT._GMT7 }} />,
};

const _GMT6_1: TimeZone = {
  id: uuidv4(),
  image: getTimeZoneImage(TimeGMT._GMT6),
  name: <Trans id={Zones._GMT6_1.id} values={{ delay: TimeGMT._GMT6 }} />,
};

const _GMT6_2: TimeZone = {
  id: uuidv4(),
  image: getTimeZoneImage(TimeGMT._GMT6),
  name: <Trans id={Zones._GMT6_2.id} values={{ delay: TimeGMT._GMT6 }} />,
};

const _GMT6_3: TimeZone = {
  id: uuidv4(),
  image: getTimeZoneImage(TimeGMT._GMT6),
  name: <Trans id={Zones._GMT6_3.id} values={{ delay: TimeGMT._GMT6 }} />,
};

const _GMT5_1: TimeZone = {
  id: uuidv4(),
  image: getTimeZoneImage(TimeGMT._GMT5),
  name: <Trans id={Zones._GMT5_1.id} values={{ delay: TimeGMT._GMT5 }} />,
};

const _GMT5_2: TimeZone = {
  id: uuidv4(),
  image: getTimeZoneImage(TimeGMT._GMT5),
  name: <Trans id={Zones._GMT5_2.id} values={{ delay: TimeGMT._GMT5 }} />,
};

const _GMT5_3: TimeZone = {
  id: uuidv4(),
  image: getTimeZoneImage(TimeGMT._GMT5),
  name: <Trans id={Zones._GMT5_3.id} values={{ delay: TimeGMT._GMT5 }} />,
};

const _GMT4_1: TimeZone = {
  id: uuidv4(),
  image: getTimeZoneImage(TimeGMT._GMT4),
  name: <Trans id={Zones._GMT4_1.id} values={{ delay: TimeGMT._GMT4 }} />,
};

const _GMT4_2: TimeZone = {
  id: uuidv4(),
  image: getTimeZoneImage(TimeGMT._GMT4),
  name: <Trans id={Zones._GMT4_2.id} values={{ delay: TimeGMT._GMT4 }} />,
};

const _GMT3_30: TimeZone = {
  id: uuidv4(),
  image: getTimeZoneImage(TimeGMT._GMT3_30),
  name: <Trans id={Zones._GMT3_30.id} values={{ delay: TimeGMT._GMT3_30 }} />,
};

const _GMT3_1: TimeZone = {
  id: uuidv4(),
  image: getTimeZoneImage(TimeGMT._GMT3),
  name: <Trans id={Zones._GMT3_1.id} values={{ delay: TimeGMT._GMT3 }} />,
};

const _GMT3_2: TimeZone = {
  id: uuidv4(),
  image: getTimeZoneImage(TimeGMT._GMT3),
  name: <Trans id={Zones._GMT3_2.id} values={{ delay: TimeGMT._GMT3 }} />,
};

const _GMT2: TimeZone = {
  id: uuidv4(),
  image: getTimeZoneImage(TimeGMT._GMT2),
  name: <Trans id={Zones._GMT2.id} values={{ delay: TimeGMT._GMT2 }} />,
};

const _GMT1: TimeZone = {
  id: uuidv4(),
  image: getTimeZoneImage(TimeGMT._GMT1),
  name: <Trans id={Zones._GMT1.id} values={{ delay: TimeGMT._GMT1 }} />,
};

const GMT_1: TimeZone = {
  id: uuidv4(),
  image: getTimeZoneImage(TimeGMT.GMT),
  name: <Trans id={Zones.GMT_1.id} values={{ delay: TimeGMT.GMT }} />,
};

const GMT_2: TimeZone = {
  id: uuidv4(),
  image: getTimeZoneImage(TimeGMT.GMT),
  name: <Trans id={Zones.GMT_2.id} values={{ delay: TimeGMT.GMT }} />,
};

const GMT1_1: TimeZone = {
  id: uuidv4(),
  image: getTimeZoneImage(TimeGMT.GMT1),
  name: <Trans id={Zones.GMT1_1.id} values={{ delay: TimeGMT.GMT1 }} />,
};

export const GMT1_2: TimeZone = {
  id: uuidv4(),
  image: getTimeZoneImage(TimeGMT.GMT1),
  name: <Trans id={Zones.GMT1_2.id} values={{ delay: TimeGMT.GMT1 }} />,
};

const GMT1_3: TimeZone = {
  id: uuidv4(),
  image: getTimeZoneImage(TimeGMT.GMT1),
  name: <Trans id={Zones.GMT1_3.id} values={{ delay: TimeGMT.GMT1 }} />,
};

const GMT1_4: TimeZone = {
  id: uuidv4(),
  image: getTimeZoneImage(TimeGMT.GMT1),
  name: <Trans id={Zones.GMT1_4.id} values={{ delay: TimeGMT.GMT1 }} />,
};

const GMT2_1: TimeZone = {
  id: uuidv4(),
  image: getTimeZoneImage(TimeGMT.GMT2),
  name: <Trans id={Zones.GMT2_1.id} values={{ delay: TimeGMT.GMT2 }} />,
};

const GMT2_2: TimeZone = {
  id: uuidv4(),
  image: getTimeZoneImage(TimeGMT.GMT2),
  name: <Trans id={Zones.GMT2_2.id} values={{ delay: TimeGMT.GMT2 }} />,
};

const GMT2_3: TimeZone = {
  id: uuidv4(),
  image: getTimeZoneImage(TimeGMT.GMT2),
  name: <Trans id={Zones.GMT2_3.id} values={{ delay: TimeGMT.GMT2 }} />,
};

const GMT2_4: TimeZone = {
  id: uuidv4(),
  image: getTimeZoneImage(TimeGMT.GMT2),
  name: <Trans id={Zones.GMT2_4.id} values={{ delay: TimeGMT.GMT2 }} />,
};

const GMT2_5: TimeZone = {
  id: uuidv4(),
  image: getTimeZoneImage(TimeGMT.GMT2),
  name: <Trans id={Zones.GMT2_5.id} values={{ delay: TimeGMT.GMT2 }} />,
};

const GMT3_1: TimeZone = {
  id: uuidv4(),
  image: getTimeZoneImage(TimeGMT.GMT3),
  name: <Trans id={Zones.GMT3_1.id} values={{ delay: TimeGMT.GMT3 }} />,
};

const GMT3_2: TimeZone = {
  id: uuidv4(),
  image: getTimeZoneImage(TimeGMT.GMT3),
  name: <Trans id={Zones.GMT3_2.id} values={{ delay: TimeGMT.GMT3 }} />,
};

const GMT3_30: TimeZone = {
  id: uuidv4(),
  image: getTimeZoneImage(TimeGMT.GMT3_30),
  name: <Trans id={Zones.GMT3_30.id} values={{ delay: TimeGMT.GMT3_30 }} />,
};

const GMT4: TimeZone = {
  id: uuidv4(),
  image: getTimeZoneImage(TimeGMT.GMT4),
  name: <Trans id={Zones.GMT4.id} values={{ delay: TimeGMT.GMT4 }} />,
};

const GMT4_30: TimeZone = {
  id: uuidv4(),
  image: getTimeZoneImage(TimeGMT.GMT4_30),
  name: <Trans id={Zones.GMT4_30.id} values={{ delay: TimeGMT.GMT4_30 }} />,
};

const GMT5: TimeZone = {
  id: uuidv4(),
  image: getTimeZoneImage(TimeGMT.GMT5),
  name: <Trans id={Zones.GMT5.id} values={{ delay: TimeGMT.GMT5 }} />,
};

const GMT5_30: TimeZone = {
  id: uuidv4(),
  image: getTimeZoneImage(TimeGMT.GMT5_30),
  name: <Trans id={Zones.GMT5_30.id} values={{ delay: TimeGMT.GMT5_30 }} />,
};

const GMT6: TimeZone = {
  id: uuidv4(),
  image: getTimeZoneImage(TimeGMT.GMT6),
  name: <Trans id={Zones.GMT6.id} values={{ delay: TimeGMT.GMT6 }} />,
};

const GMT7: TimeZone = {
  id: uuidv4(),
  image: getTimeZoneImage(TimeGMT.GMT7),
  name: <Trans id={Zones.GMT7.id} values={{ delay: TimeGMT.GMT7 }} />,
};

const GMT8_1: TimeZone = {
  id: uuidv4(),
  image: getTimeZoneImage(TimeGMT.GMT8),
  name: <Trans id={Zones.GMT8_1.id} values={{ delay: TimeGMT.GMT8 }} />,
};

const GMT8_2: TimeZone = {
  id: uuidv4(),
  image: getTimeZoneImage(TimeGMT.GMT8),
  name: <Trans id={Zones.GMT8_2.id} values={{ delay: TimeGMT.GMT8 }} />,
};

const GMT9: TimeZone = {
  id: uuidv4(),
  image: getTimeZoneImage(TimeGMT.GMT9),
  name: <Trans id={Zones.GMT9.id} values={{ delay: TimeGMT.GMT9 }} />,
};

const GMT9_30_1: TimeZone = {
  id: uuidv4(),
  image: getTimeZoneImage(TimeGMT.GMT9_30),
  name: <Trans id={Zones.GMT9_30_1.id} values={{ delay: TimeGMT.GMT9_30 }} />,
};

const GMT9_30_2: TimeZone = {
  id: uuidv4(),
  image: getTimeZoneImage(TimeGMT.GMT9_30),
  name: <Trans id={Zones.GMT9_30_2.id} values={{ delay: TimeGMT.GMT9_30 }} />,
};

const GMT10_1: TimeZone = {
  id: uuidv4(),
  image: getTimeZoneImage(TimeGMT.GMT10),
  name: <Trans id={Zones.GMT10_1.id} values={{ delay: TimeGMT.GMT10 }} />,
};

const GMT10_2: TimeZone = {
  id: uuidv4(),
  image: getTimeZoneImage(TimeGMT.GMT10),
  name: <Trans id={Zones.GMT10_2.id} values={{ delay: TimeGMT.GMT10 }} />,
};

const GMT10_3: TimeZone = {
  id: uuidv4(),
  image: getTimeZoneImage(TimeGMT.GMT10),
  name: <Trans id={Zones.GMT10_3.id} values={{ delay: TimeGMT.GMT10 }} />,
};

const GMT11: TimeZone = {
  id: uuidv4(),
  image: getTimeZoneImage(TimeGMT.GMT11),
  name: <Trans id={Zones.GMT11.id} values={{ delay: TimeGMT.GMT11 }} />,
};

const GMT12_1: TimeZone = {
  id: uuidv4(),
  image: getTimeZoneImage(TimeGMT.GMT12),
  name: <Trans id={Zones.GMT12_1.id} values={{ delay: TimeGMT.GMT12 }} />,
};

const GMT12_2: TimeZone = {
  id: uuidv4(),
  image: getTimeZoneImage(TimeGMT.GMT12),
  name: <Trans id={Zones.GMT12_2.id} values={{ delay: TimeGMT.GMT12 }} />,
};

export const TIME_ZONES = {
  [_GMT12.id]: _GMT12,
  [_GMT11.id]: _GMT11,
  [_GMT10.id]: _GMT10,
  [_GMT9.id]: _GMT9,
  [_GMT8.id]: _GMT8,
  [_GMT7_1.id]: _GMT7_1,
  [_GMT7_2.id]: _GMT7_2,
  [_GMT6_1.id]: _GMT6_1,
  [_GMT6_2.id]: _GMT6_2,
  [_GMT6_3.id]: _GMT6_3,
  [_GMT5_1.id]: _GMT5_1,
  [_GMT5_2.id]: _GMT5_2,
  [_GMT5_3.id]: _GMT5_3,
  [_GMT4_1.id]: _GMT4_1,
  [_GMT4_2.id]: _GMT4_2,
  [_GMT3_30.id]: _GMT3_30,
  [_GMT3_1.id]: _GMT3_1,
  [_GMT3_2.id]: _GMT3_2,
  [_GMT2.id]: _GMT2,
  [_GMT1.id]: _GMT1,
  [GMT_1.id]: GMT_1,
  [GMT_2.id]: GMT_2,
  [GMT1_1.id]: GMT1_1,
  [GMT1_2.id]: GMT1_2,
  [GMT1_3.id]: GMT1_3,
  [GMT1_4.id]: GMT1_4,
  [GMT2_1.id]: GMT2_1,
  [GMT2_2.id]: GMT2_2,
  [GMT2_3.id]: GMT2_3,
  [GMT2_4.id]: GMT2_4,
  [GMT2_5.id]: GMT2_5,
  [GMT3_1.id]: GMT3_1,
  [GMT3_2.id]: GMT3_2,
  [GMT3_30.id]: GMT3_30,
  [GMT4.id]: GMT4,
  [GMT4_30.id]: GMT4_30,
  [GMT5.id]: GMT5,
  [GMT5_30.id]: GMT5_30,
  [GMT6.id]: GMT6,
  [GMT7.id]: GMT7,
  [GMT8_1.id]: GMT8_1,
  [GMT8_2.id]: GMT8_2,
  [GMT9.id]: GMT9,
  [GMT9_30_1.id]: GMT9_30_1,
  [GMT9_30_2.id]: GMT9_30_2,
  [GMT10_1.id]: GMT10_1,
  [GMT10_2.id]: GMT10_2,
  [GMT10_3.id]: GMT10_3,
  [GMT11.id]: GMT11,
  [GMT12_1.id]: GMT12_1,
  [GMT12_2.id]: GMT12_2,
};
