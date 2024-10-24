import {
  Home,
  Work,
  AccountCircle,
  Dashboard,
  Settings,
  Folder,
  Task,
  Star,
  AttachFile,
  CloudUpload,
  CloudDownload,
  Email,
  CalendarToday,
  Chat,
  CheckCircle,
  CheckBox,
  Notifications,
  Event,
  AccessAlarm,
  Build,
  Search,
  Save,
  Delete,
  Phone,
  Print,
  Edit,
  Send,
  MoreVert,
  Security,
  AccessTime,
  ShoppingCart,
  List,
  People,
  Lock,
  Visibility,
  ThumbUp,
  PowerSettingsNew,
  Download,
  Upload,
  PlayArrow,
  Pause,
  Stop,
  SkipNext,
  SkipPrevious,
  BatteryFull,
  WbSunny,
  Brightness4,
  Flight,
  CarRental,
  DirectionsBus,
  Train,
  DirectionsBike,
  Hotel,
  Restaurant,
  LocalCafe,
  BarChart,
  PieChart,
  AttachMoney,
  MonetizationOn,
  TrendingUp,
  TrendingDown,
  InsertChart,
  BuildCircle,
  ThumbDown,
  Assignment,
  AssignmentInd,
  TaskAlt,
  Group,
  Schedule,
  Timeline,
  Groups,
  Done,
  Feedback,
  Flag,
  PriorityHigh,
  AccountBalance,
  AccountTree,
  AirplanemodeActive,
  Analytics,
  AttachEmail,
  AutoAwesome,
  Backup,
  Checklist,
  DesignServices,
  DeviceHub,
  FolderOpen,
  Inventory,
  ListAlt,
  NotificationsActive,
  PermContactCalendar,
  Storage,
  TrackChanges,
  Tune,
  WbIncandescent,
  Widgets,
  ZoomOutMap,
} from "@mui/icons-material";

export const getIconComponent = (iconName, textColor, fontSize) => {
  const defaultFontSize = "27px";
  const defaultTextColor = "text-green-500";
  const iconProps = {
    sx: { fontSize: fontSize || defaultFontSize },
    className: `${defaultTextColor} ${textColor || ""}`.trim(),
  };

  switch (iconName) {
    case "Home":
      return <Home {...iconProps} />;
    case "Work":
      return <Work {...iconProps} />;
    case "AccountCircle":
      return <AccountCircle {...iconProps} />;
    case "Dashboard":
      return <Dashboard {...iconProps} />;
    case "Settings":
      return <Settings {...iconProps} />;
    case "Folder":
      return <Folder {...iconProps} />;
    case "Task":
      return <Task {...iconProps} />;
    case "Star":
      return <Star {...iconProps} />;
    case "AttachFile":
      return <AttachFile {...iconProps} />;
    case "CloudUpload":
      return <CloudUpload {...iconProps} />;
    case "CloudDownload":
      return <CloudDownload {...iconProps} />;
    case "Email":
      return <Email {...iconProps} />;
    case "CalendarToday":
      return <CalendarToday {...iconProps} />;
    case "Chat":
      return <Chat {...iconProps} />;
    case "CheckCircle":
      return <CheckCircle {...iconProps} />;
    case "CheckBox":
      return <CheckBox {...iconProps} />;
    case "Notifications":
      return <Notifications {...iconProps} />;
    case "Event":
      return <Event {...iconProps} />;
    case "AccessAlarm":
      return <AccessAlarm {...iconProps} />;
    case "Build":
      return <Build {...iconProps} />;
    case "Search":
      return <Search {...iconProps} />;
    case "Save":
      return <Save {...iconProps} />;
    case "Delete":
      return <Delete {...iconProps} />;
    case "Phone":
      return <Phone {...iconProps} />;
    case "Print":
      return <Print {...iconProps} />;
    case "Edit":
      return <Edit {...iconProps} />;
    case "Send":
      return <Send {...iconProps} />;
    case "MoreVert":
      return <MoreVert {...iconProps} />;
    case "Security":
      return <Security {...iconProps} />;
    case "AccessTime":
      return <AccessTime {...iconProps} />;
    case "ShoppingCart":
      return <ShoppingCart {...iconProps} />;
    case "List":
      return <List {...iconProps} />;
    case "People":
      return <People {...iconProps} />;
    case "Lock":
      return <Lock {...iconProps} />;
    case "Visibility":
      return <Visibility {...iconProps} />;
    case "ThumbUp":
      return <ThumbUp {...iconProps} />;
    case "PowerSettingsNew":
      return <PowerSettingsNew {...iconProps} />;
    case "Download":
      return <Download {...iconProps} />;
    case "Upload":
      return <Upload {...iconProps} />;
    case "PlayArrow":
      return <PlayArrow {...iconProps} />;
    case "Pause":
      return <Pause {...iconProps} />;
    case "Stop":
      return <Stop {...iconProps} />;
    case "SkipNext":
      return <SkipNext {...iconProps} />;
    case "SkipPrevious":
      return <SkipPrevious {...iconProps} />;
    case "BatteryFull":
      return <BatteryFull {...iconProps} />;
    case "WbSunny":
      return <WbSunny {...iconProps} />;
    case "Brightness4":
      return <Brightness4 {...iconProps} />;
    case "Flight":
      return <Flight {...iconProps} />;
    case "CarRental":
      return <CarRental {...iconProps} />;
    case "DirectionsBus":
      return <DirectionsBus {...iconProps} />;
    case "Train":
      return <Train {...iconProps} />;
    case "DirectionsBike":
      return <DirectionsBike {...iconProps} />;
    case "Hotel":
      return <Hotel {...iconProps} />;
    case "Restaurant":
      return <Restaurant {...iconProps} />;
    case "LocalCafe":
      return <LocalCafe {...iconProps} />;
    case "BarChart":
      return <BarChart {...iconProps} />;
    case "PieChart":
      return <PieChart {...iconProps} />;
    case "AttachMoney":
      return <AttachMoney {...iconProps} />;
    case "MonetizationOn":
      return <MonetizationOn {...iconProps} />;
    case "TrendingUp":
      return <TrendingUp {...iconProps} />;
    case "TrendingDown":
      return <TrendingDown {...iconProps} />;
    case "InsertChart":
      return <InsertChart {...iconProps} />;
    case "BuildCircle":
      return <BuildCircle {...iconProps} />;
    case "ThumbDown":
      return <ThumbDown {...iconProps} />;
    case "Assignment":
      return <Assignment {...iconProps} />;
    case "AssignmentInd":
      return <AssignmentInd {...iconProps} />;
    case "TaskAlt":
      return <TaskAlt {...iconProps} />;
    case "Group":
      return <Group {...iconProps} />;
    case "Schedule":
      return <Schedule {...iconProps} />;
    case "Timeline":
      return <Timeline {...iconProps} />;
    case "Groups":
      return <Groups {...iconProps} />;
    case "Done":
      return <Done {...iconProps} />;
    case "Feedback":
      return <Feedback {...iconProps} />;
    case "Flag":
      return <Flag {...iconProps} />;
    case "PriorityHigh":
      return <PriorityHigh {...iconProps} />;
    case "AccountBalance":
      return <AccountBalance {...iconProps} />;
    case "AccountTree":
      return <AccountTree {...iconProps} />;
    case "AirplanemodeActive":
      return <AirplanemodeActive {...iconProps} />;
    case "Analytics":
      return <Analytics {...iconProps} />;
    case "AttachEmail":
      return <AttachEmail {...iconProps} />;
    case "AutoAwesome":
      return <AutoAwesome {...iconProps} />;
    case "Backup":
      return <Backup {...iconProps} />;
    case "Checklist":
      return <Checklist {...iconProps} />;
    case "DesignServices":
      return <DesignServices {...iconProps} />;
    case "DeviceHub":
      return <DeviceHub {...iconProps} />;
    case "FolderOpen":
      return <FolderOpen {...iconProps} />;
    case "Inventory":
      return <Inventory {...iconProps} />;
    case "ListAlt":
      return <ListAlt {...iconProps} />;
    case "NotificationsActive":
      return <NotificationsActive {...iconProps} />;
    case "PermContactCalendar":
      return <PermContactCalendar {...iconProps} />;
    case "Storage":
      return <Storage {...iconProps} />;
    case "TrackChanges":
      return <TrackChanges {...iconProps} />;
    case "Tune":
      return <Tune {...iconProps} />;
    case "WbIncandescent":
      return <WbIncandescent {...iconProps} />;
    case "Widgets":
      return <Widgets {...iconProps} />;
    case "ZoomOutMap":
      return <ZoomOutMap {...iconProps} />;
    default:
      console.warn(`Icon ${iconName} not found in MUI icons`);

      return <Home {...iconProps} />; // Return null or a default icon if no match is found
  }
};
