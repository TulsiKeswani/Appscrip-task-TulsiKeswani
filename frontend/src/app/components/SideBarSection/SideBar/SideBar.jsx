import styles from "./SideBar.module.css";
import SideBarDropDown from "./../SideBarDropDown/SideBarDropDown";

export default function SideBar({isSidebarOpen}) {
  if(!isSidebarOpen){
    return null;
  }
  return (
     <div className={styles.sidebar}>
      <SideBarDropDown
        title="IDEAL FOR"
        options={["Men", "Women", "Kids"]}
      ></SideBarDropDown>
      <SideBarDropDown
        title="OCCASION"
        options={["Casual", "Formal", "Party", "Sports", "Wedding"]}
      />
      <SideBarDropDown
        title="WORK"
        options={["Office Wear", "Daily Wear", "Travel", "Work From Home"]}
      />
      <SideBarDropDown
        title="FABRIC"
        options={["Cotton", "Polyester", "Wool", "Silk", "Denim", "Linen"]}
      />
      <SideBarDropDown
        title="SEGMENT"
        options={["Premium", "Mid Range", "Budget"]}
      />
      <SideBarDropDown
        title="SUITABLE FOR"
        options={["Summer", "Winter", "All Season"]}
      />
      <SideBarDropDown
        title="RAW MATERIALS"
        options={["Organic", "Synthetic", "Blended"]}
      />
      <SideBarDropDown
        title="PATTERN"
        options={["Solid", "Printed", "Striped", "Checked", "Embroidered"]}
      />
    </div> 
  );
}
