"use strict";
(self["webpackChunkpjcan"] = self["webpackChunkpjcan"] || []).push([[241],{

/***/ 96188:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Ay: function() { return /* binding */ lang; },
  t: function() { return /* binding */ t; }
});

// UNUSED EXPORTS: getLanguage, getLanguageList

// EXTERNAL MODULE: ./node_modules/vue-i18n/dist/vue-i18n.mjs
var vue_i18n = __webpack_require__(85851);
;// CONCATENATED MODULE: ./src/lang/ru.ts
/* harmony default export */ var ru = ({
  BLE: {
    title: "Bluetooth",
    btn: {
      connect: "Подключиться",
      disconnect: "Отключиться"
    },
    dialog: {
      noConnected: "Вы не подключены ни к одному устройству Bluetooth.",
      connected: "Вы подключены к устройству Bluetooth PJCAN."
    },
    notify: {
      noConnected: "Нет подключения устройству Bluetooth.",
      connected: "PJCAN подключен",
      disconnected: "PJCAN отключен",
      lostConnected: "Потеряно подключение с устройством Bluetooth PJCAN. Пытаюсь восстановить связь...",
      noData: "Нет данных для отправки"
    },
    server: {
      deviceSelected: "Выбрано {n} Bluetooth устройство.",
      deviceDisconnected: "Устройство Bluetooth {n} отключено.",
      GATTConnect: "Подключение к GATT серверу ...",
      getService: "GATT сервер подключен, читаю сервис ...",
      getCharacteristic: "Сервис получен, читаю характеристику ...",
      characteristicDone: "Характеристика получена.",
      startNotifications: "Запуск уведомлений ...",
      notificationsDone: "Уведомления запущены.",
      reconnect: "Повторная попытка через {n} сек... (осталось {c} попыток)",
      reconnectRestored: "Соединение с устройством Bluetooth PJCAN восстановлено.",
      connectionLost: "Связь с устройством Bluetooth PJCAN потеряна.",
      receive: "Входящие данные: ID {n}",
      send: "Исходящие данные: ID {n}",
      versionProtocol: "Версия протокола: {mj}.{mn}.{bl}.{rv}"
    }
  },
  update: {
    title: "Обновление PJCAN",
    warning: "Внимание!",
    btn: {
      update: "Обновить",
      rollback: "Откатить",
      later: "Позже"
    },
    dialog: {
      updateTo: "Обновить прошивку PJCAN до версии {version} ?",
      rollbackTo: "Откатить прошивку PJCAN до версии {version} ?",
      browserOutdated: "Версия вашего браузера устарела.\n" + "Обновите его и откройте web-приложение заново."
    },
    process: {
      preparation: "Подготовка к загрузке ...",
      upload: "Загрузка прошивки",
      update: "Обновление прошивки ...",
      timeLeft: "Оставшееся время"
    },
    notify: {
      newVersion: "Доступно обновление {version}",
      completed: "Прошивка успешно завершена",
      warning: "Прошивка завершена не удачно. Выключите и включите устройство, и попробуйте обновить еще раз",
      error: "Ошибка обновления прошивки",
      errorDownload: "Ошибка загрузки прошивки с сервера. Возможно отсутствует подключение к сети интернет",
      errorUpload: "Ошибка загрузки прошивки на устройство PJCAN. Возможно отсутствует подключение по Bluetooth",
      errorWaitUpdate: "Истекло время ожидания устройства PJCAN. Выключите и включите устройство, и попробуйте обновить еще раз"
    }
  },
  error: {
    title: "Что смотришь,\nпиши PJ82",
    version: "Ошибка запроса версии устройства. Переподключите устройство PJCAN"
  },
  rules: {
    required: "Обязательное поле",
    counter: "Максимум {n} символов | Максимум {n} символ | Максимум {n} символа | Максимум {n} символов",
    english: "Ввод только английских символов и цифр"
  },
  menu: {
    onboard: "Бортовой компьютер",
    onboardButtons: "Кнопки БК",
    test: "Тестирование",
    language: "Выбор языка",
    settings: {
      buttonsSW1: "Кнопки руля",
      buttonsSW3: "Кнопки SW3",
      options: "Параметры"
    },
    update: "Обновить до {version}",
    rollback: "Откатить до {version}",
    install: "Установить",
    about: "О программе"
  },
  activation: {
    success: "Устройство успешно активировано! Устройство перезагружается ...",
    error: "Устройство не активировано. Обратитесь к разработчику."
  },
  about: {
    title: "О программе",
    version: "Версия web-приложения",
    versionFirmware: "Версия прошивки PJCAN",
    carSupport: "Поддержка автомобиля",
    author: "Автор",
    sha: "Хеш устройства"
  },
  deviceInfo: {
    title: "Техническая информация",
    // chipCores: "Количество ядер",
    // chipModel: "Модель чипа",
    // chipRevision: "Номер ревизии чипа",
    cpuFreqMHz: "Частота ЦП, МГц",
    // cycleCount: "Количество циклов",
    efuseMac: "MAC-адрес",
    // flashChipMode: "Режим флеш-памяти",
    // flashChipSize: "Размер флеш-памяти, байт",
    // flashChipSpeed: "Частота флеш-памяти",
    // heapSize: "Размер кучи в памяти",
    // freeHeap: "Свободной кучи в памяти",
    // maxAllocHeap: "Размер самого большого блока кучи",
    // minFreeHeap: "Наименьший уровень свободной кучи",
    // psramSize: "Размер SPI RAM",
    // freePsram: "Свободной SPI RAM",
    // maxAllocPsram: "Размер самого большого блока SPI RAM",
    // minFreePsram: "Наименьший уровень свободной SPI RAM",
    freeSketchSpace: "Свободное место для прошивки",
    sdkVersion: "Версия SDK",
    sketchMD5: "MD5 прошивки",
    sketchSize: "Размер прошивки",
    temperatureChip: "Температура чипа",
    sha: "SHA",
    hardware: "Версия платы"
  },
  deviceReset: {
    title: "Сброс конфигурации устройства",
    config: "Сбросить значения конфигурации по умолчанию",
    view: "Сбросить значения конфигурации отображения по умолчанию",
    buttons: "Сбросить значения конфигурации кнопок по умолчанию"
  },
  btn: {
    apply: "Применить",
    cancel: "Отмена",
    close: "Закрыть",
    deviceInfo: "Об устройстве",
    deviceReset: "Сбросить конфигурацию",
    reset: "Сбросить",
    ok: "OK"
  },
  onboard: {
    title: "Бортовой компьютер",
    viewSetting: {
      enabled: {
        title: "Отображать информацию",
        description: "Статус отображения информации на информационном экране"
      },
      type: {
        title: "Стиль отображения информации",
        description: "Отображать статичный текст, мигающий или в стиле бегущий строки",
        items: ["Обычный текст", "Мигание текста", "Бегущая строка"]
      },
      time: {
        title: "Время отображения, сек.",
        description: "Показывать на информационном экране указанное количество секунд"
      },
      delay: {
        title: "Время паузы отображения, сек.",
        description: "Пауза отображения информации указанное количество секунд"
      }
    },
    info: {
      title: "Информация",
      acc: {
        title: "ACC",
        description: "Питание автомобиля"
      },
      worktime: {
        title: "Время работы",
        description: "Время работы устройства с момента включения",
        menu: "LCD: Время работы"
      },
      voltmeter: {
        title: "Напряжение",
        description: "Напряжение бортовой сети в вольтах (среднее значение за 10 сек.)",
        menu: "LCD: Напряжение"
      },
      temperatureIn: {
        title: "Температура воздуха",
        description: "Показания температуры в салоне автомобиля",
        menu: "LCD: Температура воздуха"
      },
      temperatureOut: {
        title: "Температура воздуха",
        description: "Показания внешней температуры автомобиля",
        menu: "LCD: Температура воздуха"
      },
      handbrake: {
        title: "Ручной тормоз",
        description: "Положение ручного тормоза",
        menu: "LCD: Ручной тормоз"
      },
      reverse: {
        title: "Задний ход",
        description: "Ручка КПП в положении R",
        menu: "LCD: Задний ход"
      },
      safetyBelt: {
        title: "Ремень безопасности",
        description: "Ремень безопасности водителя и пассажира",
        menu: "LCD: Ремень безопасности"
      },
      signal: {
        title: "Сигнал поворота",
        description: "Сигнал поворота и аварийной остановки",
        menu: "LCD: Сигнал поворота"
      }
    },
    engine: {
      title: "Двигатель",
      enabled: {
        title: "Работа ДВС",
        description: "Текущее состояние ДВС",
        menu: "LCD: Работа ДВС"
      },
      RPM: {
        title: "RPM двигателя",
        description: "Текущее количество полных оборотов коленчатого вала двигателя в минуту",
        menu: "LCD: RPM двигателя"
      },
      countRPM: {
        title: "Счетчик RPM, тыс.",
        description: "Общее количество полных оборотов коленчатого вала двигателя в тысячах",
        menu: "LCD: Счетчик RPM"
      },
      load: {
        title: "Нагрузка на ДВС",
        description: "Нагрузка чего-то на что-то, хз как рассчитывается",
        menu: "LCD: Нагрузка на ДВС"
      },
      worktime: {
        title: "Моточасы",
        description: "Общее время работы двигателя",
        menu: "LCD: Моточасы"
      },
      throttle: {
        title: "Положение дрос. заслонки",
        description: "Относительное положение дроссельной заслонки",
        menu: "LCD: Положение дроссельной заслонки"
      },
      coolant: {
        title: "Температура антифриза",
        description: "Температура охлаждающей жидкости",
        menu: "LCD: Температура антифриза"
      },
      settings: {
        title: "Настройки статистики ДВС",
        menu: "Настройки статистики",
        showDays: {
          title: "Показывать дни в статистике",
          titleShort: "Показывать дни",
          description: "Отображать моточасы на информационном экране в формате d.hh:mm:ss"
        },
        worktime: {
          title: "Время работы, мин.",
          description: "Общее время работы двигателя"
        },
        countRPM: {
          title: "Счетчик RPM, тыс.",
          description: "Общее количество полных оборотов коленчатого вала двигателя в тысячах"
        }
      }
    },
    fuel: {
      title: "Топливо",
      current: {
        title: "Расход топлива",
        description: "Значение БК, л/100 км",
        menu: "LCD: Расход топлива"
      },
      avg: {
        title: "Средний расход",
        description: "Значение БК, л/100 км",
        menu: "LCD: Средний расход"
      },
      settings: {
        title: "Настройки расхода",
        menu: "Настройки расхода",
        ratio: {
          title: "Коэффициент расхода топлива",
          description: "Для корректировки расхода ГБО или др. вида топлива"
        }
      }
    },
    movement: {
      title: "Спидометр",
      speed: {
        title: "Скорость автомобиля",
        description: "Значение БК, км/ч",
        menu: "LCD: Скорость автомобиля"
      },
      speedAVG: {
        title: "Средняя скорость",
        description: "Значение БК, км/ч",
        menu: "LCD: Средняя скорость"
      },
      restWay: {
        title: "Остаток пути, км",
        description: "Значение БК в км",
        menu: "LCD: Остаток пути"
      }
    },
    doors: {
      title: "Двери",
      menu: "LCD: Двери",
      doorFL: {
        title: "Передняя левая",
        description: "Текущее состояние передней левой двери"
      },
      doorFR: {
        title: "Передняя правая",
        description: "Текущее состояние передней правой двери"
      },
      doorBL: {
        title: "Задняя левая",
        description: "Текущее состояние задней левой двери"
      },
      doorBR: {
        title: "Задняя правая",
        description: "Текущее состояние задней правой двери"
      },
      trunk: {
        title: "Багажник",
        description: "Текущее состояние багажника"
      },
      settings: {
        title: "Конфигурация дверей",
        frontReverse: {
          title: "Поменять передние двери",
          description: "Поменять местами передние двери"
        },
        backReverse: {
          title: "Поменять задние двери",
          description: "Поменять местами задние двери"
        },
        frontBackReverse: {
          title: "Поменять передние с задними дверьми",
          description: "Поменять местами левые и правые двери"
        }
      }
    },
    volume: {
      title: "Звук",
      menu: "LCD: Звук",
      mute: {
        title: "Выключить звук",
        description: "Временное выключение звука без изменения текущего уровня"
      },
      level: {
        title: "Уровень звука",
        description: "Текущее значение уровня звука"
      }
    },
    climate: {
      title: "Климат-контроль",
      menu: "LCD: Климат-контроль",
      enabled: {
        title: "Статус работы",
        description: "Статус работы блока климат-контроля"
      },
      autoMode: {
        title: "Auto",
        description: "Автоматический режим работы блока климата"
      },
      ac: {
        title: "AC",
        description: "Работа кондиционера"
      },
      temperature: {
        title: "Температура",
        description: "Установленное значение температуры блока климат-контроля"
      },
      air: {
        title: "Вентиляция салона",
        description: "Циркуляция воздуха внутри салона"
      },
      blow: {
        title: "Воздушный поток",
        description: "Направление воздушного потока"
      }
    },
    bose: {
      title: "Bose",
      menu: "LCD: Bose",
      enabled: {
        title: "Включение Bose",
        description: "Включение/выключение усилителя звука Bose"
      },
      audioPLT: {
        title: "Audio PLT",
        description: "Представляет собой систему подавления шумов, которая непрерывно регулирует звучание для компенсации фонового шума и скорости автомобиля"
      },
      radioFM: {
        title: "Radio FM",
        description: "Включение/выключение радио FM"
      },
      wow: {
        title: "Wow",
        description: "Звуковой сигнал при изменении параметров"
      },
      balance: {
        title: "Balance",
        description: "Смещение звукового баланса вправо или влево"
      },
      bass: {
        title: "Bass",
        description: "Усиление низких частот"
      },
      fade: {
        title: "Fade",
        description: "Смещение звукового баланса вперед или назад"
      },
      treble: {
        title: "Treble",
        description: "Усиление высоких частот"
      },
      centerPoint: {
        title: "CenterPoint",
        description: "Технология CenterPoint преобразует стерео-сигналы в многоканальное аудио и одновременно создает более широкую/объемную звуковую область"
      },
      volumeConfig: {
        title: "Настройка запуска",
        start: {
          title: "Изменять уровень звука",
          description: "Устанавливать указанный ниже уровень звука при включении адаптера PJCAN"
        },
        level: {
          title: "Уровень звука",
          description: "Уровень звука устанавливаемый при включении адаптера PJCAN"
        }
      }
    }
  },
  buttons: {
    title: "Настройки кнопок",
    extendedMode: "Расширенный режим",
    hintMode: " (расширенный режим)",
    mode: "Кнопка MODE",
    setUp: "Кнопка SET UP",
    setDown: "Кнопка SET DOWN",
    volUp: "Кнопка VOL +",
    volDown: "Кнопка VOL -",
    volMute: "Кнопка VOL MUTE",
    extended: {
      title: "Расширенный режим",
      description: "Поддержка двойного, тройного нажатия и удержания кнопки"
    },
    resistance: {
      title: "Сопротивление кнопки",
      description: "Интервал сопротивления кнопки",
      cur: {
        title: "Текущее сопротивление",
        description: "Значение сопротивления нажатой кнопки. Изменить нельзя"
      },
      min: {
        title: "Минимальное сопротивление",
        description: "Укажите минимальное значение кнопки, но не допускайте пересечение значений с другими кнопками"
      },
      max: {
        title: "Максимальное сопротивление",
        description: "Укажите максимальное значение кнопки, но не допускайте пересечение значений с другими кнопками"
      }
    },
    pressSingle: {
      title: "Кнопка нажата 1 раз",
      description: "Функция, которая выполняется при нажатии кнопки"
    },
    pressDual: {
      title: "Кнопка нажата 2 раза",
      description: "Функция, которая выполняется при нажатии кнопки 2 раза"
    },
    pressTriple: {
      title: "Кнопка нажата 3 раза",
      description: "Функция, которая выполняется при нажатии кнопки 3 раза"
    },
    pressHold: {
      title: "Удержание кнопки",
      description: "Функция, которая выполняется при нажатии и удержании кнопки 3 и более секунд.",
      time: {
        title: "Время удержания кнопки",
        description: "Время удержания кнопки, сек."
      }
    },
    functions: {
      0: "Функция отсутствует",
      1: "PJCAN: сменить режим управления",
      2: "PJCAN: показать значения ДВС",
      3: "PJCAN: показать значения расхода",
      4: "PJCAN: показать значения движения",
      5: "PJCAN: показать значения температуры",
      6: "PJCAN: показать дату и время",
      7: "ГУ: кнопка MUTE на руле",
      8: "ГУ: кнопка MODE на руле",
      9: "ГУ: кнопка SET DOWN на руле",
      10: "ГУ: кнопка SET UP на руле",
      11: "ГУ: кнопка Vol+ на руле",
      12: "ГУ: кнопка Vol- на руле",
      13: "ГУ: открыть голосовое управление",
      14: "ГУ: открыть эквалайзер",
      15: "ГУ: открыть радио",
      16: "ГУ: поиск волны радио",
      17: "ГУ: открыть камеру",
      18: "ГУ: открыть телефон",
      19: "БК: кнопка INFO (информация БК)",
      20: "БК: кнопка CLOCK (время на БК)",
      21: "БК: кнопка CLOCK H (часы)",
      22: "БК: кнопка CLOCK M (минуты)",
      23: "БК: кнопка CLOCK 24/12 (смена формата времени)",
      24: "БК: кнопка сброса минут в 0",
      25: "БК: сменить режим INFO на CLOCK и обратно",
      26: "БК: нажатие и удержание кнопки INFO (сброс расхода)",
      27: "БК: нажатие и удержание кнопки CLOCK (настройка часов)",
      28: "BOSE: вкл/выкл усилителя",
      29: "BOSE: вкл/выкл Audio PLT",
      30: "BOSE: MUTE",
      31: "BOSE: VOL +",
      32: "BOSE: VOL -",
      33: "BOSE: BALANCE +",
      34: "BOSE: BALANCE -",
      35: "BOSE: BASS +",
      36: "BOSE: BASS -",
      37: "BOSE: FADE +",
      38: "BOSE: FADE -",
      39: "BOSE: TREBLE +",
      40: "BOSE: TREBLE -",
      41: "BOSE: переключение режимов Center Point (циклично)"
    },
    edit: {
      title: "Редактирование кнопки \"{name}\"",
      beginValue: {
        title: "Начальное значение",
        description: "Начальное значение диапазона сопротивления кнопки в у.е."
      },
      endValue: {
        title: "Конечное значение",
        description: "Конечное значение диапазона сопротивления кнопки в у.е."
      }
    },
    notify: {
      detected: "Нажата кнопка \"{id}\"",
      notDefined: "Нажата кнопка не определена!"
    }
  },
  onboardButtons: {
    title: "Кнопки БК",
    buttons: {
      holdClock: "удержание CLOCK",
      holdInfo: "удержание SET/INFO",
      clock: "CLOCK",
      info: "SET/INFO",
      clockH: "H",
      clockM: "M",
      clockRM: "RM",
      clock24: "24/12"
    }
  },
  test: {
    title: "Тестирование",
    description: 'Введите текст (только латинские символы и цифры), выберите стиль и выравнивание, укажите время отображения и нажмите "Показать"',
    text: {
      title: "Текст",
      description: "Текст отображаемый на информационном экране"
    },
    btnShow: "Показать"
  },
  options: {
    title: "Параметры",
    lcd: {
      title: "Экран БК",
      enabled: {
        title: "Экран БК",
        description: "Включить/выключить вывод информации на информационный экран БК"
      },
      logo: {
        title: "Логотип",
        description: "Тест отображаемый в момент отсутствия данных для вывода на экране БК. Максимум 12 символов"
      },
      hello: {
        title: "Текст приветствия",
        description: "Тест отображаемый при включении ACC. Максимум 32 символов",
        menu: "БК: Текст приветствия"
      }
    },
    head: {
      title: "Головное устройство",
      protocol: {
        title: "Протокол UART",
        description: "Протокол UART для связи PJCAN с ГУ",
        list: {
          1: "Raise HM_ND00 2017.12.11 (19200)",
          2: "Raise HM_ND01 2019.06.21 (38400)",
          3: "Raise HM_ND03 2022.11.11 (19200)",
          4: "SimpleSoft RP5_MZ_002 (38400)"
        }
      },
      reverseUart: {
        title: "Поменять контакты UART",
        description: "Поменять контакты UART местами, если нет связи PJCAN с ГУ"
      },
      onboardShow: {
        title: "Показывать информацию ГУ",
        description: "Показывать текст ГУ на экране БК вместо логотипа",
        menu: "LCD: Показывать текст ГУ"
      },
      sendButton: {
        title: "Кнопки руля",
        description: "Поддержка управления ГУ кнопками на руле"
      },
      sendClimate: {
        title: "Показать климат на ГУ",
        description: "Показать панель климата на ГУ (если протокол поддерживает данный функционал)"
      },
      sendDoors: {
        title: "Показать статус дверей на ГУ",
        description: "Показать статус дверей автомобиля на ГУ (если протокол поддерживает данный функционал)"
      },
      sendOnboard: {
        title: "Показать данные БК на ГУ",
        description: "Показать статус дверей и значения бортового компьютера автомобиля на ГУ (если протокол поддерживает данный функционал)"
      },
      holdToFlip: {
        title: "Регулятор уровня громкости",
        description: "Плавная изменение уровня звука при удержании кнопки Vol+/Vol- (рекомендуется, если ГУ не поддерживает этот функционал)"
      }
    },
    datetime: {
      title: "Дата и время",
      description: "Для отображения даты и времени на экране БК необходимо каждый раз при включении зажигания автомобиля запускать web-приложение для синхронизации данных с адаптером PJCAN.",
      menu: "LCD: Параметры отображения",
      date: {
        title: "Показать дату",
        description: "Отображать на экране БК текущую дату"
      },
      time: {
        title: "Показать время",
        description: "Отображать на экране БК текущее время"
      },
      dayWeek: {
        title: "Показать день недели",
        description: "Отображать на экране БК текущий день недели"
      },
      dateAndDayWeek: {
        title: "Показать дату и день недели",
        description: "Отображать на экране БК текущую дату и день недели"
      },
      timeAndDayWeek: {
        title: "Показать время и день недели",
        description: "Отображать на экране БК текущее время и день недели"
      },
      fullDatetime: {
        title: "Показать полную дату и время",
        description: "Отображать на экране БК в полном формате текущую дату и время"
      }
    },
    onboard: {
      title: "Бортовой компьютер",
      description: 'Список карточек отображаемых на экране "Бортовой компьютер". Порядок меняется путем перетаскивания блока вверх/вниз. Так же можно включить/выключить отображения на странице',
      reset: {
        menu: "Упорядочить по умолчанию"
      }
    }
  },
  scanner: {
    dialog: {
      title: "Сканирование can-шины",
      text: "Начать сканирование can-шины?\n" + "Значения сканирования будут автоматически отправлены PJ82."
    },
    btn: {
      start: "Начать",
      next: "Далее",
      finish: "Финиш"
    },
    step: {
      0: {
        title: "Сканирование значений двигателя",
        text: 'Запустите двигатель автомобиля и нажмите кнопку "Далее"'
      },
      1: {
        title: "Сканирование значений дверей",
        text: "1. Откройте водительскую дверь и закройте ее;\n" + "2. Откройте пассажирскую дверь за водителем и закройте ее;\n" + "3. Откройте багажник и закройте его;\n" + "4. Откройте пассажирскую дверь сзади справа и закройте ее;\n" + "5. Откройте пассажирскую дверь спереди справа и закройте ее.\n" + "\n" + 'Вернитесь в салон и нажмите кнопку "Далее"'
      },
      2: {
        title: "Сканирование значений сигналов",
        text: "1. Пристегните ремень безопасности водителя;\n" + "2. Пристегните ремень безопасности переднего пассажира;\n" + "3. Пристегните ремни безопасности задних пассажиров;\n" + "4. Включите сигнал левого поворота, затем правого, выключите;\n" + "5. Включите сигнал аварийной остановки, выключите его.\n" + "\n" + 'Нажмите кнопку "Далее"'
      },
      3: {
        title: "Сканирование значений климата",
        text: "1. Включите/выключите AUTO;\n" + "2. Включите/выключите AC;\n" + "3. Измените направление воздушного потока;\n" + "4. Изменить скорость воздушного потока.\n" + "\n" + 'Нажмите кнопку "Далее"'
      },
      4: {
        title: "Сканирование значений движения",
        text: "1. Снимите автомобиль с ручного тормоза;\n" + "2. Включите заднюю передачу и немного сдайте назад;\n" + "3. Включите режим драйва АКПП или переключите передачу МКПП и начните движение вперед.\n" + "\n" + 'После завершения движения автомобиля заглушите двигатель и нажмите кнопку "Финиш"'
      }
    },
    notify: {
      errorStart: "Сканирование не запущено.\n" + "Проверьте подключение к устройству PJCAN.",
      errorSend: "Ошибка отправки пакета данных сканирования.",
      warningSend: "Нет данных сканирования для отправки."
    },
    upload: {
      title: "Загрузка на сервер",
      text: "Загрузка отсканированных значений на сервер.",
      leftToLoad: "Нет пакетов для загрузки | Осталось загрузить {n} пакет | Осталось загрузить {n} пакета | Осталось загрузить {n} пакетов"
    }
  },
  choosingCarModel: {
    title: "Выбор модели автомобиля",
    label: "Модель автомобиля",
    description: "Возможность изменить модель автомобиля поддерживаемое адаптером PJCAN",
    carModels: {
      0: "Mazda",
      1: "Mazda 3 BK",
      2: "Mazda 3 BL (тестируется)",
      3: "Mazda 6 GG",
      4: "Mazda 6 GH (тестируется)",
      5: "Mazda CX-7",
      6: "Mazda CX-7 rest",
      7: "Mazda CX-9",
      8: "Mazda CX-9 rest",
      9: "Mazda 5 (тестируется)"
    }
  },
  help: {
    onboard: {
      notify: "Свайп влево/вправо позволяет листать блоки с информацией"
    }
  },
  language: {
    title: "Выбор языка",
    label: "Язык интерфейса",
    description: "Выберите подходящий вам язык интерфейса"
  }
});
;// CONCATENATED MODULE: ./src/lang/en.ts
/* harmony default export */ var en = ({
  BLE: {
    title: "Bluetooth",
    btn: {
      connect: "Connect",
      disconnect: "Disconnect"
    },
    dialog: {
      noConnected: "You are not connected to any Bluetooth device.",
      connected: "You are connected to a PJCAN Bluetooth device."
    },
    notify: {
      noConnected: "No connection to Bluetooth device.",
      connected: "PJCAN connected",
      disconnected: "PJCAN disabled",
      lostConnected: "Lost connection with PJCAN Bluetooth device. Trying to reconnect...",
      noData: "No data to send"
    },
    server: {
      deviceSelected: "{n} bluetooth device selected.",
      deviceDisconnected: "Bluetooth device {n} is disconnected.",
      GATTConnect: "Connecting to GATT server...",
      getService: "GATT server connected, reading service...",
      getCharacteristic: "Service received, read the characteristic ...",
      characteristicDone: "Characteristic received.",
      startNotifications: "Launching notifications...",
      notificationsDone: "Notifications started.",
      reconnect: "Retrying in {n} seconds... ({c} attempts remaining)",
      reconnectRestored: "The connection to the PJCAN Bluetooth device has been re-established.",
      connectionLost: "Communication with the PJCAN Bluetooth device has been lost.",
      receive: "Receive data: ID {n}",
      send: "Sending data: ID {n}",
      versionProtocol: "Protocol version: {mj}.{mn}.{bl}.{rv}"
    }
  },
  update: {
    title: "Update PJCAN",
    warning: "Attention!",
    btn: {
      update: "Update",
      rollback: "Rollback",
      later: "Later"
    },
    dialog: {
      updateTo: "Update PJCAN firmware to version {version} ?",
      rollbackTo: "Rollback PJCAN firmware to version {version} ?",
      browserOutdated: "Your browser version is outdated.\n" + "Update it and open the web application again."
    },
    process: {
      preparation: "Preparing to upload...",
      upload: "Uploading Firmware",
      update: "Firmware update...",
      timeLeft: "Time left"
    },
    notify: {
      newVersion: "Update available {version}",
      completed: "Firmware completed successfully",
      warning: "The firmware was not completed successfully. Turn your device off and on and try updating again",
      error: "Firmware update error",
      errorDownload: "Error downloading firmware from the server. You may not be connected to the Internet",
      errorUpload: "Error uploading firmware to PJCAN device. Possibly no Bluetooth connection",
      errorWaitUpdate: "The PJCAN device timed out. Turn your device off and on and try updating again"
    }
  },
  error: {
    title: "What are you watching,\nwrite PJ82",
    version: "Error requesting the device version. Reconnect the PJCAN device"
  },
  rules: {
    required: "Required",
    counter: "Max {n} characters | Max {n} character | Max {n} characters | Max {n} characters",
    english: "Invalid English"
  },
  menu: {
    onboard: "On-board",
    onboardButtons: "On-board computer buttons",
    test: "Testing",
    language: "Language",
    settings: {
      buttonsSW1: "Steering wheel buttons",
      buttonsSW3: "SW3 buttons",
      options: "Options"
    },
    update: "Upgrade to {version}",
    rollback: "Rollback to {version}",
    install: "Install",
    about: "About"
  },
  activation: {
    success: "Device successfully activated! The device is rebooting...",
    error: "The device is not activated. Contact the developer."
  },
  about: {
    title: "About",
    version: "Web application version",
    versionFirmware: "PJCAN firmware version",
    carSupport: "Car support",
    author: "Author",
    sha: "Device hash"
  },
  deviceInfo: {
    title: "Technical information",
    cpuFreqMHz: "CPU freq MHz",
    efuseMac: "Efuse MAC",
    freeSketchSpace: "Free sketch space",
    sdkVersion: "SDK version",
    sketchMD5: "Sketch MD5",
    sketchSize: "Sketch size",
    temperatureChip: "Temperature chip",
    sha: "SHA",
    hardware: "Board version"
  },
  deviceReset: {
    title: "Reset device configuration",
    config: "Reset configuration defaults",
    view: "Reset default display configuration values",
    buttons: "Reset the default button configuration values"
  },
  btn: {
    apply: "Apply",
    cancel: "Cancel",
    close: "Close",
    deviceInfo: "About device",
    deviceReset: "Reset configuration",
    reset: "Reset",
    ok: "OK"
  },
  onboard: {
    title: "On-board",
    viewSetting: {
      enabled: {
        title: "Display information",
        description: "Status display information on the information screen"
      },
      type: {
        title: "Information display style",
        description: "Display static text, blinking or in a ticker style",
        items: ["Plain text", "Flashing text", "Ticker"]
      },
      time: {
        title: "Display time, sec.",
        description: "Show the specified number of seconds on the information screen"
      },
      delay: {
        title: "Display pause time, sec.",
        description: "Pause the information display for the specified number of seconds"
      }
    },
    info: {
      title: "Information",
      acc: {
        title: "ACC",
        description: "Car power"
      },
      worktime: {
        title: "Worktime",
        description: "Operating time of the device from the moment of switching on",
        menu: "LCD: Worktime"
      },
      voltmeter: {
        title: "Voltage",
        description: "On-board mains voltage in volts (the average value for 10 sec.)",
        menu: "LCD: Voltage"
      },
      temperatureIn: {
        title: "Air temperature",
        description: "Temperature readings in the car interior",
        menu: "LCD: Air temperature"
      },
      temperatureOut: {
        title: "Air temperature",
        description: "Reading the outside temperature of the car",
        menu: "LCD: Air temperature"
      },
      handbrake: {
        title: "Hand brake",
        description: "Handbrake position",
        menu: "LCD: Hand brake"
      },
      reverse: {
        title: "Reverse",
        description: "Gear knob in R",
        menu: "LCD: Reverse"
      },
      safetyBelt: {
        title: "Safety belt",
        description: "Seat belt driver and passenger",
        menu: "LCD: Safety belt"
      },
      signal: {
        title: "Turn signal",
        description: "Turn signal and emergency stop",
        menu: "LCD: Turn signal"
      }
    },
    engine: {
      title: "Engine",
      enabled: {
        title: "Engine operation",
        description: "The current state of the internal combustion engine",
        menu: "LCD: Engine operation"
      },
      RPM: {
        title: "Engine RPM",
        description: "Current number of complete engine revolutions per minute",
        menu: "LCD: Engine RPM"
      },
      countRPM: {
        title: "RPM counter, thous.",
        description: "The total number of complete revolutions of the engine crankshaft in thousands",
        menu: "LCD: RPM counter"
      },
      load: {
        title: "Engine load",
        description: "The load of something on something, I don’t know how it is calculated",
        menu: "LCD: Engine load"
      },
      worktime: {
        title: "Hours",
        description: "Total engine running time",
        menu: "LCD: Hours"
      },
      throttle: {
        title: "Throttle position",
        description: "Relative throttle position",
        menu: "LCD: Throttle position"
      },
      coolant: {
        title: "Coolant temperature",
        description: "Coolant temperature",
        menu: "LCD: Coolant temperature"
      },
      settings: {
        title: "Settings of engine statistics",
        menu: "Statistics settings",
        showDays: {
          title: "Show days in statistics",
          description: "Display the mothers on the information screen in d.hh:mm:ss"
        },
        worktime: {
          title: "Opening time, min.",
          description: "Total engine operating time"
        },
        countRPM: {
          title: "RPM counter, thous.",
          description: "The total number of full speed of the crankshaft of the engine in thousands"
        }
      }
    },
    fuel: {
      title: "Fuel",
      current: {
        title: "Fuel consumption",
        description: "The value of the on-board, l/100 km",
        menu: "LCD: Fuel consumption"
      },
      avg: {
        title: "Average consumption",
        description: "The value of the on-board, l/100 km",
        menu: "LCD: Average consumption"
      },
      settings: {
        title: "Fuel consumption settings",
        menu: "Consumption settings",
        ratio: {
          title: "Fuel consumption coefficient",
          description: "To configure the gas flow rate or other type of fuel"
        }
      }
    },
    movement: {
      title: "Speedometer",
      speed: {
        title: "Car speed",
        description: "On-board value, km/h",
        menu: "LCD: Car speed"
      },
      speedAVG: {
        title: "Average speed",
        description: "On-board value, km/h",
        menu: "LCD: Average speed"
      },
      restWay: {
        title: "The rest of the way, km",
        description: "On-board value, km",
        menu: "LCD: Rest of the way"
      }
    },
    doors: {
      title: "Doors",
      menu: "LCD: Doors",
      doorFL: {
        title: "Front left",
        description: "Current state of front left door"
      },
      doorFR: {
        title: "Front right",
        description: "Current state of front right door"
      },
      doorBL: {
        title: "Rear left",
        description: "The current state of the rear left door"
      },
      doorBR: {
        title: "Rear right",
        description: "The current state of the rear right door"
      },
      trunk: {
        title: "Trunk",
        description: "The current state of the trunk"
      },
      settings: {
        title: "Door configuration",
        frontReverse: {
          title: "Change the front doors",
          description: "Swap the front doors"
        },
        backReverse: {
          title: "Change the rear doors",
          description: "Swap the rear doors"
        },
        frontBackReverse: {
          title: "Swap the front with the rear doors",
          description: "Swap the left and right doors"
        }
      }
    },
    volume: {
      title: "Volume",
      menu: "LCD: Volume",
      mute: {
        title: "Turn on volume",
        description: "Temporarily turn on/off the sound without changing the current level"
      },
      level: {
        title: "Volume level",
        description: "Current sound level value"
      }
    },
    climate: {
      title: "Climate control",
      menu: "LCD: Climate control",
      enabled: {
        title: "Work status",
        description: "Operation status of the climate control unit"
      },
      autoMode: {
        title: "Auto",
        description: "Automatic mode of operation of the climate unit"
      },
      ac: {
        title: "AC",
        description: "Air conditioner operation"
      },
      temperature: {
        title: "Temperature",
        description: "Climate unit temperature setpoint"
      },
      air: {
        title: "Cabin ventilation",
        description: "Air circulation inside the cabin"
      },
      blow: {
        title: "Air flow",
        description: "Airflow direction"
      }
    },
    bose: {
      title: "Bose",
      menu: "LCD: Bose",
      enabled: {
        title: "Enabling Bose",
        description: "Turning on/off the Bose sound amplifier"
      },
      audioPLT: {
        title: "Audio PLT",
        description: "It is a noise suppression system that continuously adjusts the sound to compensate for background noise and vehicle speed"
      },
      radioFM: {
        title: "Radio FM",
        description: "Turning on/off the FM radio"
      },
      wow: {
        title: "Wow",
        description: "Sound signal when changing parameters"
      },
      balance: {
        title: "Balance",
        description: "Shifting the sound balance to the right or left"
      },
      bass: {
        title: "Bass",
        description: "Amplification of low frequencies"
      },
      fade: {
        title: "Fade",
        description: "Shifting the sound balance forward or backward"
      },
      treble: {
        title: "Treble",
        description: "Amplification of high frequencies"
      },
      centerPoint: {
        title: "CenterPoint",
        description: "CenterPoint technology converts stereo signals into multi-channel audio and simultaneously creates a wider/surround sound area"
      },
      volumeConfig: {
        title: "Setting up the startup",
        start: {
          title: "Change the sound level",
          description: "Set the sound level specified below when turning on the PJCAN adapter"
        },
        level: {
          title: "Sound level",
          description: "The sound level set when the PJCAN adapter is turned on"
        }
      }
    }
  },
  buttons: {
    title: "Button settings",
    extendedMode: "Extended mode",
    hintMode: " (extended mode)",
    mode: "MODE button",
    seekUp: "SET UP button",
    seekDown: "SET DOWN button",
    volUp: "VOL + button",
    volDown: "VOL - button",
    volMute: "VOL MUTE button",
    extended: {
      title: "Extended mode",
      description: "Support for double, triple button pressing and holding"
    },
    resistance: {
      title: "Button resistance",
      description: "The resistance interval of the button in units",
      cur: {
        title: "Current resistance",
        description: "The value of the resistance of the pressed button. You can't change it"
      },
      min: {
        title: "Minimum resistance",
        description: "Specify the minimum value of the button, but do not allow the values to overlap with other buttons"
      },
      max: {
        title: "Maximum resistance",
        description: "Specify the maximum value of the button, but do not allow the values to overlap with other buttons"
      }
    },
    pressSingle: {
      title: "Button pressed 1 time",
      description: "The function that is executed when the button is pressed"
    },
    pressDual: {
      title: "Button pressed 2 times",
      description: "Function that is executed when the button is pressed 2 times"
    },
    pressTriple: {
      title: "Button pressed 3 times",
      description: "Function that is executed when the button is pressed 3 times"
    },
    pressHold: {
      title: "Button hold",
      description: "A function that is performed when the button is pressed and held for 3 or more seconds.",
      time: {
        title: "Button holding time",
        description: "Button holding time, sec."
      }
    },
    functions: {
      0: "Function is missing",
      1: "PJCAN: change the control mode",
      2: "PJCAN: show engine values",
      3: "PJCAN: show fuel consumption values",
      4: "PJCAN: show vehicle movement values",
      5: "PJCAN: show temperature values",
      6: "PJCAN: show date and time",
      7: "Head Unit: MUTE button on the steering wheel",
      8: "Head Unit: MODE button on the steering wheel",
      9: "Head Unit: SET DOWN button on the steering wheel",
      10: "Head Unit: SET UP button on the steering wheel",
      11: "Head Unit: Vol+ button on the steering wheel",
      12: "Head Unit: Vol- button on the steering wheel",
      13: "Head Unit: open voice control",
      14: "Head Unit: open the equalizer",
      15: "Head Unit: open the radio",
      16: "Head Unit: search for a radio wave",
      17: "Head Unit: open the camera",
      18: "Head Unit: open the phone",
      19: "On-board: INFO button (on-board information)",
      20: "On-board: CLOCK button (time on the on-board)",
      21: "On-board: CLOCK H button (hour)",
      22: "On-board: CLOCK M button (minutes)",
      23: "On-board: CLOCK 24/12 button (time format change)",
      24: "On-board: Reset button for minutes to 0",
      25: "On-board: change the INFO mode to CLOCK and back",
      26: "On-board: pressing and holding the INFO button (flow reset)",
      27: "On-board: pressing and holding the CLOCK button (setting the clock)",
      28: "BOSE: on/off the amplifier",
      29: "BOSE: on/off Audio PLT",
      30: "BOSE: MUTE",
      31: "BOSE: VOL +",
      32: "BOSE: VOL -",
      33: "BOSE: BALANCE +",
      34: "BOSE: BALANCE -",
      35: "BOSE: BASS +",
      36: "BOSE: BASS -",
      37: "BOSE: FADE +",
      38: "BOSE: FADE -",
      39: "BOSE: TREBLE +",
      40: "BOSE: TREBLE -",
      41: "BOSE: switching Center Point modes (cyclically)"
    },
    edit: {
      title: "Editing the \"{name}\" button"
    }
  },
  onboardButtons: {
    title: "On-board buttons",
    buttons: {
      holdClock: "hold CLOCK",
      holdInfo: "hold INFO",
      clock: "CLOCK",
      info: "INFO",
      clockH: "H",
      clockM: "M",
      clockRM: "RM",
      clock24: "24/12"
    }
  },
  test: {
    title: "Testing",
    description: 'Enter the text (only Latin symbols and numbers), select style and leveling, indicate the display time and click "Show"',
    text: {
      title: "Text",
      description: "The text displayed on the information screen"
    },
    btnShow: "Show"
  },
  options: {
    title: "Options",
    lcd: {
      title: "On-board screen",
      enabled: {
        title: "On-board screen",
        description: "Turn on/off the output of the information on the information screen"
      },
      logo: {
        title: "Logo",
        description: "The test displayed at the time of the absence of data for output to On-board screen. Maximum 12 characters"
      },
      hello: {
        title: "Hello",
        description: "Displayed test when switched by ACC. Maximum 32 characters",
        menu: "On-board: Hello"
      }
    },
    head: {
      title: "Head Unit",
      protocol: {
        title: "UART Protocol",
        description: "UART protocol for PJCAN communication with Head Unit",
        list: {
          1: "Raise HM_ND00 2017.12.11 (19200)",
          2: "Raise HM_ND01 2019.06.21 (38400)",
          3: "Raise HM_ND03 2022.11.11 (19200)",
          4: "SimpleSoft RP5_MZ_002 (38400)"
        }
      },
      reverseUart: {
        title: "Change UART contacts",
        description: "Enable if there is no PJCAN connection with multimedia"
      },
      onboardShow: {
        title: "Show the text Head Unit",
        description: "Show the text of the Head Unit on the On-board screen of the logo",
        menu: "LCD: Show the text Head Unit"
      },
      sendButton: {
        title: "Steering wheel buttons",
        description: "Control of Head Unit by buttons on the steering wheel"
      },
      sendClimate: {
        title: "Show climate on Head Unit",
        description: "Show climate control values on Head Unit (if the protocol supports this functionality)"
      },
      sendDoors: {
        title: "Show the status of doors on Head Unit",
        description: "Show the status of the car doors on Head Unit (if the protocol supports this functionality)"
      },
      sendOnboard: {
        title: "Show on-board data on the Head Unit",
        description: "Show the status of the doors and the values of the vehicle's on-board computer on the Head Unit (if the protocol supports this functionality)"
      },
      holdToFlip: {
        title: "Volume control",
        description: "Smooth change of sound level when holding the Vol+/Vol- button (recommended if the Head Unit does not support this functionality)"
      }
    },
    datetime: {
      title: "Date and time",
      description: "To display the date and time on the LCD screen, it is necessary to launch a web application to synchronize data with the PJCAN adapter every time the car ignition is turned on.",
      menu: "LCD: Display options",
      date: {
        title: "Show date",
        description: "Display the current date on the LCD screen"
      },
      time: {
        title: "Show time",
        description: "Display the current time on the LCD screen"
      },
      dayWeek: {
        title: "Show day of week",
        description: "Display the current day of the week on the LCD screen"
      },
      dateAndDayWeek: {
        title: "Show date and day of week",
        description: "Display the current date and day of the week on the LCD screen"
      },
      timeAndDayWeek: {
        title: "Show time and day of week",
        description: "Display the current time and day of the week on the LCD screen"
      },
      fullDatetime: {
        title: "Show full date and time",
        description: "Display the current date and time on the LCD screen in full format"
      }
    },
    onboard: {
      title: "On-board",
      description: "A list of cards displayed on the On-Board Computer screen. The order is changed by dragging the block up/down. You can also enable/disable the display on the page",
      reset: {
        menu: "Arrange by default"
      }
    }
  },
  scanner: {
    dialog: {
      title: "Scanning canbus",
      text: "Start scanning can-shines?\n" + "Scanning values will be automatically sent PJ82."
    },
    btn: {
      start: "Begin",
      next: "Next",
      finish: "Finish"
    },
    step: {
      0: {
        title: "Scanning of engine values",
        text: 'Run the car engine and press the "Next" button'
      },
      1: {
        title: "Scanning doors",
        text: "1. Open the driver's door and close it;\n" + "2. Open the passenger door behind the driver and close it;\n" + "3. Open the trunk and close it;\n" + "4. Open the passenger door behind on the right and close it;\n" + "5. Open the passenger door in front on the right and close it.\n" + "\n" + 'Return to the salon and click the "Next" button'
      },
      2: {
        title: "Scanning of signal values",
        text: "1. Fasten the driver safety belt;\n" + "2. Fasten the front passenger safety belt;\n" + "3. Fasten the seat belts of the rear passengers;\n" + "4. Turn on the left turn signal, then the right, turn off;\n" + "5. Turn on the emergency stop signal, turn it off.\n" + "\n" + 'Click "Next"'
      },
      3: {
        title: "Scanning of climate values",
        text: "1. Turn on/off Auto;\n" + "2. Turn on/off the AC;\n" + "3. Change the direction of the air flow;\n" + "4. Change the speed of the air flow.\n" + "\n" + 'Click "Next"'
      },
      4: {
        title: "Scanning of movement values",
        text: "1. Remove the car from the hand brake;\n" + "2. Turn on the rear gear and hand back a little;\n" + "3. Turn on the automatic transmission mode or switch the PMPP transmission and start moving forward.\n" + "\n" + 'After completing the movement of the car, drown out the engine and press the "finish" button'
      }
    },
    notify: {
      errorStart: "Scanning is not running.\n" + "Check the connection to the PJCAN device.",
      errorSend: "Error sending scan data packet.",
      warningSend: "There is no scan data to send."
    },
    upload: {
      title: "Uploading to the server",
      text: "Uploading scanned values to the server.",
      leftToLoad: "No packages to download | Left to download {n} package | Left to download {n} package | There are {n} packages left to download"
    }
  },
  choosingCarModel: {
    title: "Choosing a car model",
    label: "Car model",
    description: "The ability to change the car model supported by the PJCAN adapter",
    carModels: {
      0: "Mazda",
      1: "Mazda 3 BK",
      2: "Mazda 3 BL (tested)",
      3: "Mazda 6 GG",
      4: "Mazda 6 GH (tested)",
      5: "Mazda CX-7",
      6: "Mazda CX-7 rest",
      7: "Mazda CX-9",
      8: "Mazda CX-9 rest",
      9: "Mazda 5 (tested)"
    }
  },
  help: {
    buttons: {
      notify: "Warning! In this section of the menu, the steering wheel buttons operate in programming mode"
    },
    onboard: {
      notify: "Swipe left/right allows you to scroll through the blocks with information",
      noModelSelected: "Warning! The car model is not selected. Go to the menu - About the program - Car support"
    }
  },
  language: {
    title: "Language",
    label: "Interface language",
    description: "Choose the interface language that suits you"
  }
});
// EXTERNAL MODULE: ./node_modules/moment/moment.js
var moment = __webpack_require__(49148);
var moment_default = /*#__PURE__*/__webpack_require__.n(moment);
;// CONCATENATED MODULE: ./src/lang/index.ts
// noinspection JSUnresolvedVariable,JSValidateTypes,JSUnresolvedFunction,DuplicatedCode




const defaultLocale = "ru";
const messages = {
  ru: ru,
  en: en
};
/** Список доступных языков */
const getLanguageList = () => Object.keys(messages);
const getLanguage = () => {
  // @ts-ignore
  const language = (navigator.language || navigator.browserLanguage).toLowerCase();
  const locale = getLanguageList().find(x => language.indexOf(x) > -1) ?? defaultLocale;
  moment_default().locale(locale);
  return locale;
};
const i18n = (0,vue_i18n/* createI18n */.hU)({
  locale: getLanguage(),
  fallbackLocale: "en",
  messages,
  warnHtmlMessage: false,
  pluralizationRules: {
    ru: (choice, choicesLength) => {
      if (choice === 0) return 0;
      const teen = choice > 10 && choice < 20;
      const endsWithOne = choice % 10 === 1;
      return choicesLength < 4 ? !teen && endsWithOne ? 1 : 2 : !teen && endsWithOne ? 1 : !teen && choice % 10 >= 2 && choice % 10 <= 4 ? 2 : choicesLength < 4 ? 2 : 3;
    },
    en: (choice, choicesLength) => {
      if (choice === 0) return 0;
      const teen = choice > 10 && choice < 20;
      const endsWithOne = choice % 10 === 1;
      return choicesLength < 4 ? !teen && endsWithOne ? 1 : 2 : !teen && endsWithOne ? 1 : !teen && choice % 10 >= 2 && choice % 10 <= 4 ? 2 : choicesLength < 4 ? 2 : 3;
    }
  }
});
const t = i18n.global.t;
/* harmony default export */ var lang = (i18n);


/***/ })

}]);