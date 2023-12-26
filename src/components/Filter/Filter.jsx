export const Filter = ({ handleFilterContact }) => {
  return (
    <>
      <p>Find contact by name</p>
      <input type="text" name="filter" onChange={handleFilterContact} />
    </>
  );
};
