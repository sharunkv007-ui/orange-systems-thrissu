document.getElementById("serviceForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("custName").value.trim();
  const phone = document.getElementById("custPhone").value.trim();
  const device = document.getElementById("deviceType").value;
  const issue = document.getElementById("issueDesc").value.trim();

  const ticketId = "OS-" + Math.floor(100000 + Math.random() * 900000);
  const booking = { ticketId, name, phone, device, issue, date: new Date().toLocaleString() };

  const existing = JSON.parse(localStorage.getItem("orangeSystemsBookings") || "[]");
  existing.push(booking);
  localStorage.setItem("orangeSystemsBookings", JSON.stringify(existing));

  const waText = encodeURIComponent(
    `New Service Booking (${ticketId})\nName: ${name}\nPhone: ${phone}\nDevice: ${device}\nIssue: ${issue}`
  );
  const resultBox = document.getElementById("ticketResult");
  resultBox.innerHTML = `
    <strong>Service Ticket Created: ${ticketId}</strong><br/>
    Thank you, ${name}. Your request for <b>${device}</b> is saved.<br/><br/>
    <a class="btn btn-sm btn-whatsapp" target="_blank" href="https://wa.me/919387121045?text=${waText}">Send Ticket to WhatsApp</a>
  `;
  resultBox.classList.remove("hidden");
  this.reset();
});
