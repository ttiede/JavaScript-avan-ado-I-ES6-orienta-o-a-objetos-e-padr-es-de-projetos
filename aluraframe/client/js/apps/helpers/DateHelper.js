class DateHelper {
  static dataParaTexto(data){
    return data.getDate()
    + '/' + negociacao.data.getMonth()
    + '/' + negociacao.data.getFullYear();
  }

  static textoParaData(anoMesDia) {
    return new Date(...
      anoMesDia.split('-')
      .map((item, indice) => item - indice % 2));
    }
  }
