// 1.
// function ChildComponent() {
//   return <p>I'm child</p>;
// }

function ChildComponent(props) {
  const { name, age } = props;
  return (
    <div>
      {/* <p>I'm child</p> */}
      <p>
        name : {name} / age : {age}
      </p>
    </div>
  );
}

export default ChildComponent;
