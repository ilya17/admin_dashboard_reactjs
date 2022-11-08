import { IconProps } from "./interfaces";

import { ReactComponent as Pie } from "./assets/pie.svg";
import { ReactComponent as Ticket } from "./assets/ticket.svg";
import { ReactComponent as Bulb } from "./assets/bulb.svg";
import { ReactComponent as Group } from "./assets/group.svg";
import { ReactComponent as Person } from "./assets/person.svg";
import { ReactComponent as Article } from "./assets/article.svg";
import { ReactComponent as Gear } from "./assets/gear.svg";
import { ReactComponent as Reward } from "./assets/reward.svg";
import { ReactComponent as Search } from "./assets/search.svg";
import { ReactComponent as Bell } from "./assets/bell.svg";
import { ReactComponent as ArrowDown } from "./assets/arrowDown.svg";

const IconTypes = {
  pie: Pie,
  ticket: Ticket,
  bulb: Bulb,
  group: Group,
  person: Person,
  article: Article,
  gear: Gear,
  reward: Reward,
  search: Search,
  bell: Bell,
  arrowDown: ArrowDown,
};

export const Icon = ({ iconType, className }: IconProps) => {
  const IconImg = IconTypes[iconType];

  return <IconImg className={className} />;
};
