const downloadExcel = (res) => {
    const link = document.createElement("a");
      let blob = new Blob([res], {type: "application/vnd.ms-excel"});
      link.style.display = "none";
      link.href = URL.createObjectURL(blob);
      link.download = new Date().getTime() + "e.xlsx"; //下载的文件名
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
}

export default downloadExcel;