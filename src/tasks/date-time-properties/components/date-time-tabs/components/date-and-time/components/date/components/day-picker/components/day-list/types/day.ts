type DayCommonTypes = {
  id: string;
};

type DisabledDayTypes = DayCommonTypes & {
  isDisabled: true;
};

export type AvailableDayTypes = DayCommonTypes & {
  isDisabled?: false;
  value: number;
  isSelected: boolean;
};

export type Day = DisabledDayTypes | AvailableDayTypes;
