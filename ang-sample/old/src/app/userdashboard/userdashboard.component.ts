import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-user-dashboard",
  templateUrl: "./userdashboard.component.html",
  styleUrls: ["./userdashboard.component.css"],
})
export class UserDashboardComponent implements OnInit {
  userDetails = [
    {
      meetingName: "Meeting with Ms.Bonnie from Themesberg LLC",
      time: "10:00 AM",
      status: "Done",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue.",
    },
    {
      meetingName: "Meeting with Ms.Bonnie from Themesberg LLC",
      time: "10:00 AM",
      status: "In Progress",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue.",
    },
    {
      meetingName: "Meeting with Ms.Bonnie from Themesberg LLC",
      time: "10:00 AM",
      status: "In Progress",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue.",
    },
    {
      meetingName: "Meeting with Ms.Bonnie from Themesberg LLC",
      time: "10:00 AM",
      status: "In Progress",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue.",
    },
    {
      meetingName: "Meeting with Ms.Bonnie from Themesberg LLC",
      time: "10:00 AM",
      status: "Waiting",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue.",
    },
    {
      meetingName: "Meeting with Ms.Bonnie from Themesberg LLC",
      time: "10:00 AM",
      status: "Waiting",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue.",
    },
    {
      meetingName: "Meeting with Ms.Bonnie from Themesberg LLC",
      time: "10:00 AM",
      status: "Waiting",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue.",
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
