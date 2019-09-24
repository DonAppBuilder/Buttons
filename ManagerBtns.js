var app = new Vue({
  el: "#app",
  data: {
    applicantDrafts: "Calculating...",
    finalPackages: "Calculating...",
    gisUnmappable: "Calculating...",
    ineligableApp: "Calculating...",
    escalatedReceipts: "Calculating...",
    arcHistorian: "Calculating...",
    returnH2Bravo: "Calculating...",
    pendingInsuranceVerification: "Calculating...",
    pendingGLOApproval: "Calculating...",
    svaToComplete: "Calculating...",
    nonResponsive: "Calculating...",
    ineligibleReasonsHRP: "Calculating..."
  },
  computed: {
    changeRoleButton() {
      return `Change User Role`;
    },
    finalPackagesButton() {
      return `View Final Packages (${this.finalPackages})`;
    },
    managerMetricsButton() {
      return `Manager Metrics`;
    },
    applicantDraftsButton() {
      return `Applicant Drafts (${this.applicantDrafts})`;
    },
    gisUnmappableButton() {
      return `Unmappable - Awaiting GIS Coordinates (${this.gisUnmappable})`;
    },
    ineligableAppButton() {
      return `Ineligible Apps with Reason (${this.ineligableApp})`;
    },
    escalatedReceiptsButton() {
      return `Escalated Receipt Review (${this.escalatedReceipts})`;
    },
    arcHistorianButton() {
      return `Pending Arc Historian Completion (${this.arcHistorian})`;
    },
    returnH2BravoButton() {
      return `Returned to H2Bravo (${this.returnH2Bravo})`;
    },
    failedGLOQCButton() {
      return `Failed GLO QC Weekly Metrics`;
    },
    pendingInsuranceVerificationButton() {
      return `Pending Insurance Verification Request (${this.pendingInsuranceVerification})`;
    },
    falloutRatesButton() {
      return `Fallout Rates - In Progress`;
    },
    pendingGLOApprovalButton() {
      return `GLO Environmental Approval Pending (${this.pendingGLOApproval})`;
    },
    svaToCompleteButton() {
      return `Site Visit Button to Complete (${this.svaToComplete})`;
    },
    holdStatusReportButton() {
      return `Hold Status Report`;
    },
    nonResponsiveButton() {
      return `Non-Responsive Applicants (${this.nonResponsive})`;
    },
    ineligibleReasonsHRPButton() {
      return `All Ineligible Reasons (${this.ineligibleReasonsHRP})`;
    },
    dailyGloQCMetricsButton() {
      return `Daily GLO QC Metrics`;
    }
  },
  mounted() {
    this.query("bpb7sp6q2", "300", "numMatches").then(
      data => (this.finalPackages = data)
    );
    this.query("bps9cv7c9", "8", "numMatches").then(
      data => (this.applicantDrafts = data)
    );
    this.query("bpb7sp6q2", "368", "numMatches").then(
      data => (this.gisUnmappable = data)
    );
    this.query("bpb7sp6q2", "175", "numMatches").then(
      data => (this.ineligableApp = data)
    );
    this.query("bpb7sp6q2", "140", "numMatches").then(
      data => (this.escalatedReceipts = data)
    );
    this.query("bpb7sp6q2", "408", "numMatches").then(
      data => (this.arcHistorian = data)
    );
    this.query("bpb7sp6q2", "62", "numMatches").then(
      data => (this.returnH2Bravo = data)
    );
    this.query("bpb7sp6q2", "51", "numMatches").then(
      data => (this.pendingInsuranceVerification = data)
    );
    this.query("bpb7sp6q2", "159", "numMatches").then(
      data => (this.pendingGLOApproval = data)
    );
    this.query("bpb7sp6q2", "415", "numMatches").then(
      data => (this.svaToComplete = data)
    );
    this.query("bpb7sp6q2", "420", "numMatches").then(
      data => (this.nonResponsive = data)
    );
    this.query("bpspkpuuy", "99", "numMatches").then(
      data => (this.ineligibleReasonsHRP = data)
    );
  },
  methods: {
    query(dbid, qid, node) {
      return fetch(
        `https://workforce.quickbase.com/db/${dbid}?act=API_DoQueryCount&qid=${qid}`
      )
        .then(function(response) {
          return response.text();
        })
        .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
        .then(data => data.getElementsByTagName(node)[0].textContent);
    }
  }
});
