import { printProps } from "./printProps";
import { SplitScreen } from "./SplitScreen";
import UserInfo from "./UserInfo";

const LeftHandComponent = ({ name }) => {
  return <h1 style={{ backgroundColor: "green" }}>{name}</h1>;
};
const RightHandComponent = ({ title }) => {
  return <p style={{ backgroundColor: "red" }}>{title}</p>;
};


const UserWrapped = printProps(UserInfo);
function App() {
  return (
    <div>
      {/* <SplitScreen leftWeight={1} rightWeight={3}>
        <LeftHandComponent name="Prodip" />
        <RightHandComponent title="Sarker" />
      </SplitScreen> */}
      <UserWrapped a={24} b="Hello" user= {{name:'Prodip'}}/>
    </div>
  );
}

export default App;
