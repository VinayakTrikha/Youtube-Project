const AutoSuggestionDialog = ({ suggestions }) => {
  return (
      <ul>
        {suggestions.map((suggestion) => (
          <li>{suggestion}</li>
        ))}
      </ul>
  );
};

export default AutoSuggestionDialog;
