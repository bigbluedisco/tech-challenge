interface PlaceholderProps {
  children?: React.ReactNode;
  height?: number;
  color?: string;
}

const Placeholder = ({
  children,
  height = 200,
  color = 'lightgrey',
}: PlaceholderProps) => {
  return (
    <div
      style={{
        backgroundColor: color,
        height: height,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {children}
    </div>
  );
};

export default Placeholder;
