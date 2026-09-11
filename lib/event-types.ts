// Types d'événements traiteur, utilisés pour le filtre de la galerie
// "Réalisations" et pour le formulaire devis. Un seul endroit à modifier
// si de nouveaux types apparaissent.

export type EventTypeId = "mariage" | "entreprise" | "cocktail" | "buffet" | "autre";

export const eventTypes: { id: EventTypeId; label: string }[] = [
  { id: "mariage", label: "Mariage" },
  { id: "entreprise", label: "Entreprise / séminaire" },
  { id: "cocktail", label: "Cocktail privé" },
  { id: "buffet", label: "Buffet" },
  { id: "autre", label: "Autre" },
];

export type Realisation = {
  id: string;
  title: string;
  eventType: EventTypeId;
  // TODO(contenu réel) : remplacer par le vrai chemin de la photo une fois
  // les photos d'événements récupérées et rangées dans /public/realisations.
  imageSrc: string;
  description?: string;
};

// Photos issues de la fiche Google TOOM. Hotlinkées depuis Google pour
// l'instant (source externe, pas de contrôle sur la pérennité des URLs) —
// TODO(contenu réel) : à terme, télécharger les originaux en HD et les
// héberger dans /public/realisations ; associer chaque photo à son vrai
// type d'événement (mariage Maud & Taha, entreprise, cocktail...) et un
// titre descriptif une fois les légendes connues.
export const realisations: Realisation[] = [
  { id: "photo-01", title: "TOOM — photo 1", eventType: "autre", imageSrc: "https://lh3.googleusercontent.com/T66bva_21vwXGN5c1gT7VrQEPF8COYq0oTm-Y1k1kb4OnKXsuaBQh_MmtsjJ6D29bTaO8U_lnsUjTUXz=s1000" },
  { id: "photo-02", title: "TOOM — photo 2", eventType: "autre", imageSrc: "https://lh3.googleusercontent.com/7PLRmHpw9EgCIqVjBlNjGftn3_HZo4hldiJURmMg9QVfywI_3_A4jjylel-AHkBthNcnMDqNibEHZls7=s1000" },
  { id: "photo-03", title: "TOOM — photo 3", eventType: "autre", imageSrc: "https://lh3.googleusercontent.com/g8jgl5pvQDbff3CGcFXoTT6rrhxlkS6uL-nbJ_Zln7XnD0QhXmxr6Y0wRaiBLvQavGbfrxn9Fphq8U4m=s1000" },
  { id: "photo-04", title: "TOOM — photo 4", eventType: "autre", imageSrc: "https://lh3.googleusercontent.com/5Ytw9GsgVS79pVTdd70d-IaANV9H68q2QYfnQaB1SGLNy6F7hNkcKxQlF-DXtZwZOov_HT-dQsmHtBXt=s1000" },
  { id: "photo-05", title: "TOOM — photo 5", eventType: "autre", imageSrc: "https://lh3.googleusercontent.com/Dfu4L_wPave7Lmt7qPGeF5tph17o-8buwBnYMe9MjMza5K1QfLrlYCKYOz9RWPzs-RU4CwdRNQPd4RwM=s1000" },
  { id: "photo-06", title: "TOOM — photo 6", eventType: "autre", imageSrc: "https://lh3.googleusercontent.com/krkgGe0EZpbOwBzMjEBJPG9CJ3g1JVZATMhHMg6m5VeFw_ikOD4h2wPC1t7-P5Cg7DRngogl2jqQU-Qe=s1000" },
  { id: "photo-07", title: "TOOM — photo 7", eventType: "autre", imageSrc: "https://lh3.googleusercontent.com/lZi-eNUt4vdHZdjLAMZnbA3Q5Xn6fzYr7lt8dKzDQfuzShy9A8wkxo0f_HVhxqahX-6WjS-jkLnjMWo3=s1000" },
  { id: "photo-08", title: "TOOM — photo 8", eventType: "autre", imageSrc: "https://lh3.googleusercontent.com/QtiRrrLJ-cNmn3Y_oSREn-IyvIPiewyzVWFdnuquQbaXmp5YQxSb9pkp5FU84gjvYx6qjYETl4MkdtZw=s1000" },
  { id: "photo-09", title: "TOOM — photo 9", eventType: "autre", imageSrc: "https://lh3.googleusercontent.com/rq4CrYf5HeCT68kWYZ24dynnj3mzCXIsh5PicusON4kEuyK97kmnAxzyVnJILQwXDxkumV80uxwOkk09=s1000" },
  { id: "photo-10", title: "TOOM — photo 10", eventType: "autre", imageSrc: "https://lh3.googleusercontent.com/iUPp-wE2nQEB6O6arU0fr6t6fx56sxfUQenzrgtkwQtcxxkNC59fHHA2Xj9KKgiY_MvlktGsvRXGGenV=s1000" },
  { id: "photo-11", title: "TOOM — photo 11", eventType: "autre", imageSrc: "https://lh3.googleusercontent.com/DBaWu1tTt5n5EH4ibQXQfmS2WCNQFsXm3JiSQ5oZDvKbOala4jRb7WwCvTx8Y5GAaYkDDBZ_Y_a8rN_X=s1000" },
  { id: "photo-12", title: "TOOM — photo 12", eventType: "autre", imageSrc: "https://lh3.googleusercontent.com/Vg8zja7T12Gtmwji3p4cC9FW7xq3qWd-j5Hl_T5SskQtQgmMijbP4CDHBKk_JLDWrpbDj10AcT0qBQie=s1000" },
  { id: "photo-13", title: "TOOM — photo 13", eventType: "autre", imageSrc: "https://lh3.googleusercontent.com/2XWSS2--L1cat2d8rsGS-h_QzpCIYO3CIrbPA8VwdAHuy07b427vp9hHTlKY344WBnZrsY9vSyT3ARqq=s1000" },
  { id: "photo-14", title: "TOOM — photo 14", eventType: "autre", imageSrc: "https://lh3.googleusercontent.com/Rek2Csvckkk3SJcLuYuGC2zHBKNXh-p9htaAv94mAx5urZ2ImrmuJudPrmHUQVMwVL4NwgZTsDdsXIUd=s1000" },
  { id: "photo-15", title: "TOOM — photo 15", eventType: "autre", imageSrc: "https://lh3.googleusercontent.com/4uZ1nurXyjM9SoznWbRpIcw66ZcwvsPw8Azvskf54fzjCqQnZV5-V6TsgLTzrVCq4_yOFi_I6Hi4cb9h=s1000" },
  { id: "photo-16", title: "TOOM — photo 16", eventType: "autre", imageSrc: "https://lh3.googleusercontent.com/N7CWFFdsv0ox5sxfZFGsQoNVL6WI9Li2dRMhPT-NwFLKaAvoCFwfbVSVNrTfLGTvngRgzwxAUn9GT52f=s1000" },
  { id: "photo-17", title: "TOOM — photo 17", eventType: "autre", imageSrc: "https://lh3.googleusercontent.com/2WUs4hHArCW1filQaaNxr7MMIiNGPMFbhO0jNLR1MCwamPtg4TxFJmeR7jXLWw1kNJXPXkOntYJZRXDS=s1000" },
  { id: "photo-18", title: "TOOM — photo 18", eventType: "autre", imageSrc: "https://lh3.googleusercontent.com/wC64HE8kQfBaGspXl5TBc8A5KAk_Fs67AISmV_Ym_Wda73X4CEp_PBbj6CGKMMRD-_To827kPaN6sr7t=s1000" },
  { id: "photo-19", title: "TOOM — photo 19", eventType: "autre", imageSrc: "https://lh3.googleusercontent.com/ItqJNkuAC8zvs-wyrRR8NfF-C8G-Rcf0B7qKRlFtU4ciPjbcfWU89LEpN6qIb86eGrSxnU-X1CA9Autl=s1000" },
  { id: "photo-20", title: "TOOM — photo 20", eventType: "autre", imageSrc: "https://lh3.googleusercontent.com/eHWBoN8TLmqDPjdNNVi_9NmeOLtFb1YM61olup9RUg47pdaMp4-iofx3bnEODGOHhYqmVIrAnDAZ4zqQ=s1000" },
  { id: "photo-21", title: "TOOM — photo 21", eventType: "autre", imageSrc: "https://lh3.googleusercontent.com/XFSndyNF78M2bEKyQfZj9I7tqMQS9jnCH-sjG_cZ-tfuY2v3H0TOzH0ntREOPkxFp57Ywvq361PGYZ20=s1000" },
  { id: "photo-22", title: "TOOM — photo 22", eventType: "autre", imageSrc: "https://lh3.googleusercontent.com/EDYZ6N2Lbckoyip7QBfAJD2sO_Oc1NOho0Qam5kK-yhwNYxs0iN0sEpoDcsh11BFB0YyZUySJl2id5pv=s1000" },
  { id: "photo-23", title: "TOOM — photo 23", eventType: "autre", imageSrc: "https://lh3.googleusercontent.com/Oe2pP4Wv4c_6rTFVAtCPyGauNXFYKOfW7PZ9yhEIafmenYwpR63TIQzQyCFQKzK3S4YIt7TfwPbi4NrU=s1000" },
  { id: "photo-24", title: "TOOM — photo 24", eventType: "autre", imageSrc: "https://lh3.googleusercontent.com/vai70XLPuGYBHM_BFhgw1Z3nyTjYdL8rF-d6D3ukvOapWEEVhYnrsJGgcFLL_Br9UqZ0kWinB0e-pzU6=s1000" },
  { id: "photo-25", title: "TOOM — photo 25", eventType: "autre", imageSrc: "https://lh3.googleusercontent.com/nfcZpfkZY49YMrx4Fe2-_Q7pg_HkvgD5EvQOTogj8lEwMGo3tVOD72kCvv4gWUA30IYIm_gNAOT7CoHz=s1000" },
  { id: "photo-26", title: "TOOM — photo 26", eventType: "autre", imageSrc: "https://lh3.googleusercontent.com/u2A_NLYSeg-WnAQWpzQEd5Hh1yko3Dws768j2exdgS4exnmiJjr8EiPSV2lvvhzDJTNyFomJleZzxZCR=s1000" },
  { id: "photo-27", title: "TOOM — photo 27", eventType: "autre", imageSrc: "https://lh3.googleusercontent.com/U-lOhanwTLIeYEr_xXiHu4pr9rEJ1juBBVauzyBOf8PkW3Cvs1OPZMs8drxMHnYp6xAy0qgwo_4QDcmL=s1000" },
  { id: "photo-28", title: "TOOM — photo 28", eventType: "autre", imageSrc: "https://lh3.googleusercontent.com/lVi6nshcBOi__QX2OXhSBNcO19lBxySjZcPem8GQwF5yflDC4KLWaMKrwtNb-Y_JLwy7TzkvxYO1MEop=s1000" },
  { id: "photo-29", title: "TOOM — photo 29", eventType: "autre", imageSrc: "https://lh3.googleusercontent.com/RLy08XVbwSgYJQJxLRRk3g4jI-7DO0N-6jtlIhg8ascmFEp891lcT7VRqpWpZ30GsFtL6BEXVkJp8dP1=s1000" },
  { id: "photo-30", title: "TOOM — photo 30", eventType: "autre", imageSrc: "https://lh3.googleusercontent.com/Tqd2fIcSf8PVZXr9ftNAI5Wvo1U58Ryj6xHCrppdDijoOnRULyimchGy9xzFaMFjGqY22sZ8w22J36Py=s1000" },
  { id: "photo-31", title: "TOOM — photo 31", eventType: "autre", imageSrc: "https://lh3.googleusercontent.com/HS1UyWk_hQ732DzwQQxzqk0ONy5M9nPq7cDg5YMpGZb6xFm2GOqJkO9GRFWr317Tzas4DU42ZX86NDg_=s1000" },
  { id: "photo-32", title: "TOOM — photo 32", eventType: "autre", imageSrc: "https://lh3.googleusercontent.com/O53xG9um28E47aAVAxPzqY13oHupNWym_GCOLZ08l3IzHurkVd0nloTkt7kU87jVkngv-04-noYk2PCM=s1000" },
  { id: "photo-33", title: "TOOM — photo 33", eventType: "autre", imageSrc: "https://lh3.googleusercontent.com/sjQt2SNo0KTvgPazAeW-iAm74fc9MJ85uBOiP2ts-wC4KDph-eBayorFCfyKRBev4m518X7ZrKpRKFOr=s1000" },
  { id: "photo-34", title: "TOOM — photo 34", eventType: "autre", imageSrc: "https://lh3.googleusercontent.com/SRUb3c_onWH_JDh1l9obztHh-MS-xywFUbue5Cg2r9vfX9A_e3E4J6t5brypeq_fA056GN91xvGy-FP1=s1000" },
  { id: "photo-35", title: "TOOM — photo 35", eventType: "autre", imageSrc: "https://lh3.googleusercontent.com/2N-lBola9NBtk5euUDiQ0761dnWg-hZ78yAVuCYkP9IJZiorWm-_Rxr_JPNFny25-BQ_ZD8f8B5h_XHd=s1000" },
  { id: "photo-36", title: "TOOM — photo 36", eventType: "autre", imageSrc: "https://lh3.googleusercontent.com/gCkDwZ2DggpivyjYRbODBBTq4z3cBqcIaG-fAHgRUbNYhWXaR9wkBMcB7VPmGwOBEuK8XlmbprRuLpVt=s1000" },
  { id: "photo-37", title: "TOOM — photo 37", eventType: "autre", imageSrc: "https://lh3.googleusercontent.com/e_nramPT1XBj3KwTWPAudz1z_uDlDjzSnbQdoqR-qTcz2Fgd6C2ebPWJrjmqNGunZdkSs-xcXhf1OsBW=s1000" },
  { id: "photo-38", title: "TOOM — photo 38", eventType: "autre", imageSrc: "https://lh3.googleusercontent.com/MPqQQCVw_WhmIKGgi4XnUHWF8AoDNvmDv9BMgtgvZieXzD4fATuUe0nusPIPKY6nQAjSRkCXWsYstxeJ=s1000" },
  { id: "photo-39", title: "TOOM — photo 39", eventType: "autre", imageSrc: "https://lh3.googleusercontent.com/fm3ViV1vR830fHUo9ON54YX9IfelRp2KyabZ8h0Avps9vc55NwfjghoaSiZHl-iOZcM4Ki_xNNv2vGIg=s1000" },
  { id: "photo-40", title: "TOOM — photo 40", eventType: "autre", imageSrc: "https://lh3.googleusercontent.com/WfXHCXgOexXkuc0gQYP2BE4r1cXGWfFNUPinFaMgp_wpRYpeJoFNiYR7AfaKabVEN_2urcT2YvtlX3nb=s1000" },
  { id: "photo-41", title: "TOOM — photo 41", eventType: "autre", imageSrc: "https://lh3.googleusercontent.com/UmkNzczYfbr2ICncLZgQrL3tpExY_agYtBaejm-iiHTIbKBGq8xEJJncsITUihsqWPmaDTjJ8Os7vMpG=s1000" },
  { id: "photo-42", title: "TOOM — photo 42", eventType: "autre", imageSrc: "https://lh3.googleusercontent.com/wgHxKxiB4Sp6LjR9bQzRuyZreShrchS5mH-EGXB71kWb-aorfNvt9pWXbgYxXLzilcY-zNtTxtWSWrub=s1000" },
  { id: "photo-43", title: "TOOM — photo 43", eventType: "autre", imageSrc: "https://lh3.googleusercontent.com/mvXsZFMqyYd5Fyca016xOTTAGk4BRcn0L7ZUhu4500Ze2JpRUGxZQ-3zA5ojUWWnuy_-ZeugUt6sfDCI=s1000" },
  { id: "photo-44", title: "TOOM — photo 44", eventType: "autre", imageSrc: "https://lh3.googleusercontent.com/Cv_kM5-c5GAHOsSy4thZbCH1U9FbGWH1AWPcHiYWyZwdtPpyGbSVeIZ2SwohEULs5xO5qsb1rC6Hfur2=s1000" },
  { id: "photo-45", title: "TOOM — photo 45", eventType: "autre", imageSrc: "https://lh3.googleusercontent.com/JkokvB6_T8MHGxQU_opndZqvmgeJ31to7jBIMx2E2SCLH6FO0klzxQ7WE_X5s2OewPhshnfYIhXxLG-X=s1000" },
  { id: "photo-46", title: "TOOM — photo 46", eventType: "autre", imageSrc: "https://lh3.googleusercontent.com/PJyKDVNI3MOqusq9A6FMrQoZ2G-KCNJaZ8vVMC63jfTa1Pxgz65S_otuHrZT-3XBQJr8CYqMnnvYL72B=s1000" },
  { id: "photo-47", title: "TOOM — photo 47", eventType: "autre", imageSrc: "https://lh3.googleusercontent.com/HpKOG8QX2UbmPTfC-8Rr2N-J79GX8L6DC9Z8btjdGV2Ev3FT5FtgMzTU-udv6E3D-4sHPni5iHqJj4jm=s1000" },
  { id: "photo-48", title: "TOOM — photo 48", eventType: "autre", imageSrc: "https://lh3.googleusercontent.com/Y7TDeodKH3yJfGtvaOdiWa4DjZ9-VM7IddIscgur3-JPKjc5EZC-Yh7eR5EPc6UpCVFtJm8J4-neWeWj=s1000" },
  { id: "photo-49", title: "TOOM — photo 49", eventType: "autre", imageSrc: "https://lh3.googleusercontent.com/L7RPkPiyigGbMIf0ZPvs4BMi4tWCMdvQBp7M3U7l5V64-FMquo59AU1wPtveBb3-dXnrpuTDZTwPC4XE=s1000" },
  { id: "photo-50", title: "TOOM — photo 50", eventType: "autre", imageSrc: "https://lh3.googleusercontent.com/GEBNcchW28HXk7A89n-mYWP-6tdQMfmhKFMJVDxkbzQJjDjavftRZ-5bB66gQjvGjAXGzuhYOk3gy5yr=s1000" },
  { id: "photo-51", title: "TOOM — photo 51", eventType: "autre", imageSrc: "https://lh3.googleusercontent.com/MXMq98v_hCS4TrboquxeDaKBJgDH9zxPKQD2uAnfqZEe9t3j3JUOphwWKFvGy68FsV_4hZLagHQXZWw6=s1000" },
  { id: "photo-52", title: "TOOM — photo 52", eventType: "autre", imageSrc: "https://lh3.googleusercontent.com/EidwEAWa-Y5RAXq6A1ud25q34bjr2p1zQ5g-ZsG7xGIhW5Cr7cONBYFYhwBULoeQy4UHiruq1QQ06D8w=s1000" },
  { id: "photo-53", title: "TOOM — photo 53", eventType: "autre", imageSrc: "https://lh3.googleusercontent.com/p1HGXIT71YAZrCb7AexOXs9mffFqcQZkzPKqSVlyen0YbuL4KREIBA_Dts5SLWFPQs12crOrVDm5oF7E=s1000" },
  { id: "photo-54", title: "TOOM — photo 54", eventType: "autre", imageSrc: "https://lh3.googleusercontent.com/K0HZHM3sFpW64ACvuZTt_nT5Z_r6qv8BIH7mzOY8Wzi4sAsKln_02L34kRiAhe1RMzEMmjfgUh49_h0L=s1000" },
];
