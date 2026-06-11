(function () {

  const btn = document.getElementById("btn-reservar");
  if (!btn) return;

  btn.addEventListener("click", function () {

    const nome = document.getElementById("nome")?.value?.trim();
    const data = document.getElementById("data")?.value;
    const horario = document.getElementById("horario")?.value;
    const pessoas = document.getElementById("pessoas")?.value;

    if (!nome || !data || !horario || !pessoas) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    const telefone = "554632631010";

    const mensagem =
` La Bella Italia — Nova Reserva

 Nome: ${nome}
 Data: ${data}
 Horário: ${horario}
 Pessoas: ${pessoas}

Sistema automático do restaurante.`;

    const url = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;

    window.open(url, "_blank");

  });

})();