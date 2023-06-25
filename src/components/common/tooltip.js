import { OverlayTrigger, Tooltip as BTooltip } from "react-bootstrap";

export default function Tooltip({
  id = "bottom-tooltip",
  children,
  tooltip,
  placement = "bottom",
}) {
  return (
    <OverlayTrigger
      overlay={
        <BTooltip id={id} style={{ marginTop: "8px" }}>
          {tooltip}
        </BTooltip>
      }
      placement={placement}
      delayShow={200}
      delayHide={150}
      defaultOverlayShown={false}
    >
      {children}
    </OverlayTrigger>
  );
}
