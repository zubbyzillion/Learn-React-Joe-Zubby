export const flagemojiToPNG = (flag) => {
    const countryFlag = flag.toLowerCase()
   
    return (
      <img src={`https://flagcdn.com/24x18/${countryFlag}.png`} alt="flag" />
    );
  };