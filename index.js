function getSimpleDateDifference() {
    const start = new Date("2023-02-17T17:00:00");
    const now = new Date();

    let years = now.getFullYear() - start.getFullYear();
    let months = now.getMonth() - start.getMonth();
    let days = now.getDate() - start.getDate();

    if (days < 0) {
        months--;
        const previousMonth = new Date(now.getFullYear(), now.getMonth(),0);
        console.log(previousMonth)
        days += previousMonth.getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }
    document.getElementById("result").innerText =
      `মোট সময় পার হয়েছে: ${years} বছর ${months} মাস ${days} দিন`;

}
getSimpleDateDifference();