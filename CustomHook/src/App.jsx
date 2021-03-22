import React, {
  useState,
  useRef,
  useEffect,
  useCallback,
  useReducer,
} from "react";

const labels = ["check 1", "check 2", "check 3"];

const Checks = ({ checkList, labels, onCheck }) => {
  console.log("checks");
  return (
    <ul>
      {labels.map((label, idx) => (
        <li key={idx}>
          <label>
            <input
              type="checkbox"
              checked={checkList[idx]}
              onClick={() => onCheck(idx)}
            />
            {label}
          </label>
        </li>
      ))}
    </ul>
  );
};

// custom hook
const useChecks = (labels) => {
  const [checkList, setCheckList] = useState(() => labels.map(() => false));
  const handleCheckClick = (index) => {
    setCheckList((checks) => checks.map((c, i) => (i === index ? !c : c)));
  };
  const isAllChecked = checkList.every((x) => x);

  const renderChecks = () => (
    <Checks checkList={checkList} labels={labels} onCheck={handleCheckClick} />
  );

  return [isAllChecked, renderChecks];
};

const App = () => {
  const ref = useRef(["check 1", "check 2", "check 3"]);
  const [isAllChecked, renderChecks] = useChecks(ref.current);

  return (
    <div>
      {renderChecks()}
      <p>
        <button disabled={!isAllChecked}>다음</button>
      </p>
    </div>
  );
};

export default App;
