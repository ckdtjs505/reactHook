const useTaps = (initialTab, tabs) => {
  const [currentIndex, setCurrentIndex] = useState(initialTab);

  if (!Array.isArray(tabs)) {
    console.warn("tab is not array");
    return;
  }

  return {
    currentTap: tabs[currentIndex],
    changeTap: setCurrentIndex
  };
};
