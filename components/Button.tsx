import { CSSProperties, FC, MouseEventHandler } from "react";
import { Text, Touch } from "../easy-ui/core-components";
import { colors } from "../theme/colors";
import { fonts } from "../theme/fonts";

const filledContainer: CSSProperties = {
  borderWidth: 1,
  borderColor: colors.primary,
  backgroundColor: colors.primary,
  paddingLeft: 40,
  paddingRight: 40,
  borderRadius: 55,
};

const filledText: CSSProperties = {
  fontSize: 18,
  lineHeight: 60,
  color: colors.light,
  ...fonts.bold700,
};

const outlinedContainer: CSSProperties = {
  borderWidth: 1,
  borderColor: colors.primary,
  backgroundColor: colors.transparent,
  paddingLeft: 40,
  paddingRight: 40,
  borderRadius: 55,
};

const outlinedText: CSSProperties = {
  fontSize: 18,
  lineHeight: 60,
  color: colors.primary,
  ...fonts.bold700,
};

interface ButtonProps {
  onPress?: MouseEventHandler<HTMLDivElement> | undefined;
  outline?: boolean | undefined;
  label: string;
  style?: CSSProperties;
  labelStyle?: CSSProperties;
}

const Button: FC<ButtonProps> = ({
  onPress,
  outline,
  label,
  labelStyle,
  style,
}) => {
  const containerStyle = outline ? outlinedContainer : filledContainer;
  const textStyle = outline ? outlinedText : filledText;

  return (
    <Touch style={{ ...containerStyle, ...style }} onPress={onPress}>
      <Text style={{ ...textStyle, ...labelStyle }}>{`${label}`}</Text>
    </Touch>
  );
};

export default Button;
