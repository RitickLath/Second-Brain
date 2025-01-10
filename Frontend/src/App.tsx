import Button from "./component/ui/Button";
import PlusIcon from "./Icons/PlusIcon";

const App = () => {
  return (
    <div className="p-6 space-y-4">
      <h1 className="text-lg font-semibold">All Button Styles</h1>
      <div className="">
        {/* Primary Buttons */}
        <Button
          startIcon={<PlusIcon variant="start" size="sm" />}
          endIcon={<PlusIcon variant="end" size="sm" />}
          variant="Primary"
          size="sm"
          text={"Share Brain"}
        />
        <br /> <br />
        <Button
          startIcon={<PlusIcon variant="start" size="md" />}
          variant="Primary"
          size="md"
          text={"Share Brain"}
        />
        <br /> <br />
        <Button
          endIcon={<PlusIcon variant="end" size="lg" />}
          variant="Primary"
          size="lg"
          text={"Share Brain"}
        />
        <br /> <br />
        <Button
          startIcon={<PlusIcon variant="start" size="md" />}
          endIcon={<PlusIcon variant="end" size="md" />}
          variant="Primary"
          size="lg"
          text={"Share Brain"}
        />
        <br /> <br />
        {/* Secondary Buttons */}
        <Button
          startIcon={<PlusIcon variant="start" size="sm" />}
          variant="Secondary"
          size="sm"
          text={"Share Brain"}
        />
        <br /> <br />
        <Button
          endIcon={<PlusIcon variant="end" size="md" />}
          variant="Secondary"
          size="md"
          text={"Share Brain"}
        />
        <br /> <br />
        <Button
          startIcon={<PlusIcon variant="start" size="lg" />}
          variant="Secondary"
          size="lg"
          text={"Share Brain"}
        />
        <br /> <br />
        <Button
          startIcon={<PlusIcon variant="start" size="sm" />}
          endIcon={<PlusIcon variant="end" size="sm" />}
          variant="Secondary"
          size="md"
          text={"Share Brain"}
        />
      </div>
    </div>
  );
};

export default App;
