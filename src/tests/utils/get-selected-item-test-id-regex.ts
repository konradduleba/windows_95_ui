export type GetSelectedItemTextIdRegexProps = {
  selectedId: string;
  targetId: string;
};

export const getSelectedItemTextIdRegex = ({
  selectedId,
  targetId,
}: GetSelectedItemTextIdRegexProps) => {
  return new RegExp(`${targetId}.*${selectedId}|${selectedId}.*${targetId}`);
};
