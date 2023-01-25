// 자식 컴포넌트 (부모 : App3-3-4-1.js)
const MyComponent = (props) => {
  return (
    <div>
      안녕하세요, 제 이름은 {props.name} 입니다. <br />
      children 값은 {props.children}
      입니다.
    </div>
  );
};

MyComponent.defaultProps = {
  name: "기본 이름",
};

export default MyComponent;
