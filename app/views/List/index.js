import React, { useState, useRef } from "react";
import { View, SectionList, Animated, Dimensions } from "react-native";
import ListItem from "../../components/ListItem";
import ListHeader from "../../components/ListHeader";
import NewItemDialog from "../../components/NewItemDialog";
import DayView from "../../components/DayView";
import { defaultItems } from "../../assets/items";

export default function List(props) {
  const [items, setItems] = useState(defaultItems);
  const [selectedHour, setSelectedHour] = useState("");
  const [pageHeight, setPageHeight] = useState(0);
  const newItemDialog = useRef(null);
  let scrollY = new Animated.Value(0);

  function onNewItem(itemTitle) {
    const newItem = {
      timeId: selectedHour.id,
      title: itemTitle,
    };

    const auxItems = items.map((item) => {
      if (selectedHour.id === item.id) {
        item.data = [...item.data, newItem];
      }

      return item;
    });

    setItems(auxItems);
  }

  function onRemove(itemToRemove) {
    const auxItems = items.map((item) => {
      if (itemToRemove.timeId === item.id) {
        item.data = item.data.filter(
          (item) => item.title !== itemToRemove.title
        );
      }

      return item;
    });

    setItems(auxItems);
  }

  function selectHour(hour) {
    setSelectedHour(hour);
    if (newItemDialog) {
      newItemDialog.current.toggleDialog();
    }
  }

  const handleScroll = Animated.event([
    { nativeEvent: { contentOffset: { y: scrollY } } },
  ]);

  function onContentSizeChange(scrollWidth, scrollHeight) {
    const { height } = Dimensions.get("screen");
    setPageHeight(Math.abs(height - scrollHeight - 100));
  }

  return (
    <View>
      <DayView
        onPress={props.onPress}
        scrollY={scrollY}
        pageHeight={pageHeight}
      />

      <SectionList
        sections={items}
        stickySectionHeadersEnabled={true}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => <ListItem item={item} onRemove={onRemove} />}
        renderSectionHeader={({ section }) => (
          <ListHeader onPress={selectHour} item={section} />
        )}
        onScroll={handleScroll}
        onContentSizeChange={onContentSizeChange}
      />

      <NewItemDialog
        ref={newItemDialog}
        selectedHour={selectedHour}
        onNewItem={onNewItem}
      />
    </View>
  );
}
