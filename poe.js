const boton = document.getElementById("boton_construir");

const construir_casa = () => {
    const imagen = document.getElementById("imagen_construir");
    imagen.src = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgWFhYYGRYaGiEaHBkcGRwaIRwcHBweGhwcHxweIS4lHB4rHxwaJjgnLTAxNTU1HCQ7QDs0Py40NTEBDAwMEA8QHhISHjQrJCs0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ3NjQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0MTQ0NDQ0NDQ0NP/AABEIAKYBMAMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAEAAIDBQYBB//EADsQAAECBAQEAwcEAgAGAwAAAAECEQADITEEEkFRBSJhcYGRoQYTMrHB0fBCUuHxYnIVIzOSorIUFoL/xAAZAQADAQEBAAAAAAAAAAAAAAAAAQIDBAX/xAAlEQACAgEDAwUBAQAAAAAAAAAAAQIRAxIhMQRBURMiMmGBcRT/2gAMAwEAAhEDEQA/ANSXhAxJHCmPQs4BuaOFo7khZYBWRqTHAiJMsdaHYhqZZIiNaGggGOqL3hW0VSY2VJBFfODJGGSBWsCCHiaYiVsuLSG4jCm6bQKUQX70xEsPFRb7kyS7EIkxwSN4lAhPFWyNiBUtoblghQhvu4pMGiBo6EQQJUSLkhqGE5BpY7CMkQWmfFfUQsxjOUbdmkZUqDzMEMxHGZUoErVlCWehYZnyh2Zyxp9xECUmMl7RTD71RW4QwlIUp8gzpQpamHxGoFWZgQ7cuGZ6Y2aRluFe0ntKFLWhHvQSCCpwkIypoUpchQU6nJDtlaoBjNpxwSpK2StWQoK0rIUCxSHSzOwZ3IZrEgQLi8QpCn0UopUkpZKFjKAyg4tl1gBUxiWSSMysxSzfCVa0AB7fD1jzXkk2U1ZZYDjq5SlgENqkl9aMNwAXAu/SL5WKmqK1oWc/I0pZAyBQAVQDnVmLBNbi5LRgeHJMwpQEupS3SG/UaOSdAHL9I06eUiat0LQUpJdiuYkA8qATmI5XqASLh2jeOSSWm3XBMoqyz4JPWuegAqMtKFqKlPmW5CHY2DgsDXlPWNRlil9kZCymZOml1rmZX/xl8reCysN0jRFPSO/p1pgjGS3IkIeHe7iUBoUbWxUjgSIeDDQmHBMSykdCof72IimOZYVBqokK3hQ0QoKCxzwwmOtCaGkJslywssE+7he7hWOgbLHMsFe7he7gsKBcsLLBfu4Xu4LCgPJCyQX7uF7uCwoEyQskF+6he6gsKA8sLLBnuoXuoNQqAssLLBvuoXuYNQUBBELLBnuYXuYLHQHlhZYM9zC9zBYUB5Y5kg33ML3MGoVAWWMdxaeUzJ2VJWVIWSgsQoIJQLmiUNm5akxt8TNRLAUtaUA0BUQHN2G5jzfGcX5llAYFZWpAJGZecsVqNUpy5FFIDEpbVxydVNUlZcUym4pOogI5uZyCAWcOpkhw30AgVLGXlKkpCqkOzAlnHUkJdIYF73eXG4zlSqiSAEskUAckmg+JSgT4jYQKVIZSWDqAJS1gByh9Ki3UmOBcG6WwVgsKsLJlAKKDy5gOZyBkbU1ZgzhxqBBc/iJlJV7pLTM7JBGcoWSUkJzfCq4pWzRXS8SlSSVOEmiQHqo6fL+ocmYubNlhQzqQDNUoByyS4KinQFhXpDTdq72BJt0et8NwfupSJbuUICVEm6v1KPVSiT4w1XEZYupuZSXp+i57R58viMwpYksVOwUp3ZnO9vlEYmlZDsG1JLdKa1jqfWOvajHR5NsfaBJFE1cAOd7k0oAPmIuJE1C3yKCmuxePLZ6iVMBqagX/AD7xzDcQmSwpSAoKNgM4JDsHYihMKHVyT9243Bdj1gpiJc5ASVFScouXpHmHEfaDEiVlKlEqLFgpidXcu3SBp3FZmQAqKjokOE5o1fVPshemeqSMbLWWSsE7f3eCsseYcKxa0ELExl3+EEVF2NPDpGn4fxufMWlCVocmqlIAAGpoR5b94MfVp7SW/wBClDwajLHcsTAp/cnzEP8Adx16iaBssLLBPu4Xu4LCghoTQoUSMTQmhQLieJSUAlc2Wlr5loHzMDaXJQU0Joykn2/wal5SVoFedSBlp/qoqL6MI1EiclaErQQpCgFJUKgghwREqUZcMVD2hNChRQxNCaFCJgEKE0Rmcn9w846iYDYiC0Ie0KE8KAoUKFCgAUciDHYxEpBWtQSkeZ6AamM/P9rQEumW6sxGUrCXS1C7GvRvGMpZYx+TFVmnjGe03tBMlLUhE5KSlRcBALJKUlLqIooHNZ7pdoHx3tPNWjKjJzuClChnAOmY0BFvExkcfnFVZs26qlw11bs0cmfqU1US4x8k+K4vNmK51qI5spJt+5tB4RXTWzABTrIuFagtsQ7t5HSsRz1AKCcvKRQfFardy1tgYYtlKdinKSRmGWgIzKZ7vTSgJjk3e7KSGqlh8nNUsfhbdm3p0ELFpSlIQWKQE2Aehp6/PrD0TErK6ZUqZIBrmUQXtVJYP1Y63WGUFOkEAZWUtVxl8u/gD2rdFHRgM6U87VcAAHKKs9W3DRLISZWZaV1mAJUnKBS4DdxWu8CyppSlSiXL0oTmanxG2wIiRKVIyqXUqqlOxvWna/lCeryLcPE4zP8AYUOYBLObBnf0iRZSguUs4uWVa7As1e7wJJUyt0XN7gig0tr16xaIxCFJdclKgxLqUHYbctBEq0/oQHmQUhPMlmqEJJtrziB0SU5lc5ch3KGZIoByqOpPrBox8tNQgpBI5QASXpqRCnowqQpSVLTYlyoDbYlotOhgKJTOkTJeZsxcTA5Nq5OjdhCGHUhPKuWSA7lZDk1JLgNFojEoA/QxZspBB0+IX0gPjUkrlNKQ5/VlYct9TV7ekNSt0BHhuGzAkMnM5cqzAuo60MSTOHTQKt5LPyTAeF4OpCSr3q0KBL5XTQGp66/1WIpXtPiEEgLzpemdIdu4Y/mlorS38WOi69n8RKkzQucjOEB0JSLLf4jmZ2uBvXSPWMDiveS0zChSAoZsq8oIGhLEgOK+MeQYf2wCiBMkA9UkH/xUPrF3i+P505fezEg1YjNbdlVY18I0x5pY9pIiUbNtj+OS0ZkggrCsu4BZwS2j0Oo2MV3/ANqqOQM9WJLD0c328Ywi5jOTOS9WJSugNzRJjmFnJWyUzpSn/TnYksz5VpBcQS6jI91sCgj2UmI5uISgOpQAjETeKTFEgrJc1S+RqsaG6bdIi96sk8p6FwewY+UdTz+ERRtZnEZYOUrqz0c07pjyP2g9n5iZy1yliYhSswJIC+Y1zO2Ygn4nq4jSKNgotqAzhPiABHEzgT8Qu37v/Vt9d4ylPVyNbHnCqEhTggsaVG9N4scJxNcoj3a1pYEApUUljs5UkA9BGqxeDlL51SQtqlZZOjVKQCabkikV6uHBK0zEywtFshylISaBSQb5TWruCYh/0u0zecD45MnYZExSUpUUspSqBRFMwzFN2ejit4WJ4lNIYKyndmHmQ3rGcwuJWhQ5wUXAfLXfdhau8TLxSl1SUkWJQdRd2vA87XLI0l0MesjmWX1Af0GvgI6vFbk+v1aMzNnrH7iGdgpIL2ZiUjxeGpmKP6CehU770Dg6jw8Yl5w0lyOL85SUlKX+LQ+WnZ4kTxdL0X5PTq8Z0LUsOEgpGoUFDrWjs2kPlKUsgJT1Y7ixZtIXryHpNfJ4wxYrfvbzidXtAgCgzHYP82jMyMBMWASkhxU/cGvpEOLXh5NZ09ALfAjmV5JBPmBGkcuV8IagaGd7UfEESiSEuHU1ezWeKqZx+fMIUlRRlulAYVuVZix6RncR7XyEMJElSykMFLLU15Q5PpA2A9scQuayigJILICQAC/VzbrFOOWXydfwpQRc45cwnOUqmOOYlVRX9ISdtA9ogw2JlrVkQVoUbpWAoHzLwenjILe8lJJ/cKHzr84JRisOs3UkiockjzrGEunn5srSVHEMIEFBQBTdyRb4RAHElqKjmffKpw1NNAWvqXjVT8ElYBQtCmNix8KV9IruM4ZSUgrShhqSA/QEsRptGLxTXKJcWY6Q6VC6nZlAGhTRQDXOltYhxRCyMozZAcxfYuG0elW2ro9wvDhTfCToEVqQB2AHTrEOPwZloLuCgkgsGUVFz3YbtUQLZ/YIGM1KgpOZBJSQascwTzMC7UYP07wNhwlSVIACEkJUSoW1Dk1VZ9r1ibEulgpDsrlqFO45j/jf0js2STkJPOA5drA2vepqesNUkMjmSpgAzEMsEMoFqAmgAOgNDtDZ8nMlKUuCnlBf4mHwv4No3nEuIkJUk5Sp82YFxRzoWsXagA76unygrLXPQApSkGu5HgaDYWgvgVh/DVolsVLQRlAIykgDUC5Zm1jQnhUoiqaEMRmUzbM9IznGOEe7lICVnmyoKdnHNXoAYMTx9aRUIIA6i3jEuLauLAn4hwSQhOcBacgJ5CVaVoXrGe9n+KzErUfilmpSTQGwY6FvPybZ8OxSZ8pKwGChUbEEgjzEUOJ4SiUrlC8pJLAOHPatH9IIy2cZcgEnj6EglUtIF6H1tDJfGELSFISkA/pISkvbWl9RAi1JUGyA6MzFrHUVvVw1wRrXIWU/oUkaApYeoaGoxaAvkTgsZV5at+obuKgkBr+MU3E/ZSaCpUs5ga5TRXYE0VfpFZj8WVMlLsaPvukHW4eLbheLmSkBCZit2+IDoHdh2i0pQVp/g+ALB8PXL5ly15tBkUw8dSYmXimdw3enoYtk8emJBdST3At4WiCV7YAqaZLCkfuTfvlUajxhXKW9ByZrGY7Pyiifm30gzh+CA513uE7dSN/lGmVgsDMIWwQTWjor1SzP3EMmcDlqqiYFVcjOj7Q3kVUtgsswVgc1ADs471U/d/WAlYqWVBAKC4qAMrAVYZQ6nZ8umXSO42Wpbv7tTsxSiwBrVZUljb4T2gZWES5SpS3AdJWhakgEsKhq/wCpSOkXrJSEvGgjkKU6VzPrUEEhArZTXsKR2T75SqrUz1V8ICWqXDZh0aJpHDCCD75SizDKkIYVoTlUpqn9T9YlVgUA1mLJBJZK1qDm716RLyLsFEowZSApKArKCUqLFzu9w5FYUkTlkoR7tL2zFVQA7adaPbWIxhpYcTFKykOSqcsAatVVBpQw2RMSpKhLnOBV+ZYOYn4Ss83mdLRm3e41RNOmgMhSFkmrJQVjQAOEkeZiKWhQOX/nSwHJJMok60UxLabARBMxEtKiVYhRUbISXUTZimWlxaxcVrByJyVqYyZiS2bMaAK0AZT+neFukBFIw4Ww/wCeVK5SszCptcw52T4DR94tB7NoLleYhQYlS1TGFKMokN9orpEwgFKlzVOpwTlLdAQkMBt6xYYDjJQcqy4FAoHyjfDGMrtlRphZ4dLlIKghUxIT8KEjMw/agN6HwjJ4324KXRh5CJbUdY5gdQUoavcntG/lqSsApIGtKg9x9YruL8EkYn/qoCV2ExFFds7Mof4qBjqjCMeEVXg8y4hx3Ezvjmryl+UMhLbFKGzeLwNgeHzJrCWhShZwGSNPiNPWNzhfZBEnOtaRPALpVlUSE7GXUFQ3D+EB4/2hCeVDJGiiHNNAgWiZSk3piv18CZRcQ9n1yZYmLWn4gClL0BeubXTSKqScsxNqK73pBuO4spdan/JZfyGnrEOC4ZOxBdCaO+dVA/TeKvSvcw/pq0GxF+ht4GERpR635T/N4i91NlpAWh+qeYd2vHUT0qcA9x8Xoaw4zjLhgTZmsSK1eoFNx94nRj5iRlzZhsSFDxCoHSdvEpL6bHwtDSBoxO45T4xZRScQxhKySAhX+Kcj+XzgefPUtJSpaiC1Com1q3gzG4M5iQS5FlCAF4ZQZ0+X2gpPkkgGGb4VkUa/o23SL1XEkiWEol5Vfud33qQTWmtYpbWOtj5Rfez/ALPrxCFLKsiAcqSxVmI+KxBYUD79oiWKEuUDVlZOxa3dKWLM4rFhgsegzAs51EABTgAlrA6FqeXkXN9mZ4cpSFtsoG3QsYUjgSlIKsykLqMpG3S4Mc2bDCEbslqi3RPk4h0kOwzMoN0uO8UftJwZCJZVLBBzJ1JDEsb/AJSApK1Slr5yFvloSKC3rWLCXxqYKFSVj/JIt4NHOk4u4iK3DTQhIShZDC4JFdbdYOlcTmC0wt15v/aJlY6Ss/8AMkIJ3BY/L6ww4TCrspaD1c/cQ275QD1cbWkOtKFNUEpY+YNPKH4b2hEwEBKQQHIuADrXwim43wtSUBSF+8Q7KAuHsTXeIcLKSgM9ddoemLjYF8ZgJVyMC5JZnJDbVege7UtA2KlozpKjzOxSRswCRo5LlzmJftAQnseVvpEy8Uomtrhw7aU2hU0A+Vh0ZcqgFORmAdiAXSD51N2o94jXgJQKuQBQJU4AACUhyQHCQMzJGYv0jqcSBzFIH+QzX8SQ/hDf+JSOUTElqigdkmpLDR2tWKWrsBH7xLs4amoOj3EPSsVY39DFvJ9n5C0hSFHKRRSVOPV4Yv2XP6Zh8Q/qGiNUQDkoDkqWDc0eu1xSIcVilKqlagd0AFhrcEPHcQpCFAZCl6tkzkvR2HhU0ECYOUpaUFROYpqmiGGg1JtcknziV5YhTcRMUVKC1HZITkB0YqKVeTAv6SIRPKUhUxSCT8KXZQ0AKnUD1DdotUYVYFWVRgkuR5k18oH4ilS0iUQUl0kqSrKCAapBHMXFwwFRWGpdhmenyEleVGSZMZyV5pxTzMSSVFIbQMo9BUxcYfhi1Ee+mqAvkloShDCwKgHV2gqTgUy0ZEoDnRIfzJv4w4S0BveFibAPTyLeUEsl8BZ3B4QSyUy0BCf3MC9bmgL+JiRMgBRBWoqbqkeYtHF4wJ5UsOv8QDxDiQl5RMKlBRAGVKr7hn7s77PELVJiCcTMKeUJSzcwcsOrs5MQe7zJLEOLBwXH6v6gP/i+YHLh50xT5Ugoyp/7zUDuPKCMBLmpKlTilDsAhBHKOqlB3sHBYbh3Gkbg9Q+CbCYxaDSovlNvz8rGlwPFkrDOBuFerjWMri0JSrl+Ehw701YvV9axBOlhSSk2IY9vr8xHowkpLUjRMuuLe10iRyylGav9oPID/v8AQPGExeJm42e+VGdX7UhIYak3UW1JJpFfi5RQpSVGoLUt0PZqxbezvBp81aFJeWkEKCiK/wD5TRxo59YJcbchuXfCvZVCGVNOdY0Pwg9BrGjQgJDDyaAZ5n4b/rJC5Wk1At/ui6fl1MGSZqVJCkkEHaPMy679xm/skI3gLE8Nlrumu4p6isG/3eOvGSbW6Az0/hUxHwKCgNFX7ZhWA5k8potJT/sKeChGsERzpKVUUAY6YdVKPO5SkZn3gqxPjzDpX7w1UsGpFP8AE01enlpFhieCJd0EoPT7WgBWCmoJdOcbpodNLfOOqPUQl9FKSFhuGiatMtLFzUt8IDOW1a8b3DYVKJaUSwnKkZUtQ9zWp1qYA9nsFkTnUSJixR01SjQF6uTXTSLZSDmdQzUYMT4uKH53MbNjQ2eoBJJJoCeYB6DenpFJKtW9z3NT6xZcTYoYKNVBwa2r0/DALfJ44OqnclEiTB8RgkLDKQk9xFHjOFJQp0ILEWFdtTa3rGke8Ifn4Y5lJokyWIwqlghKAld2+Goc5bFwXfzrpAa5M5HxoLbivyjbqQlwWDixhk5DgiLWQDzWfjVqWnI4KVBiL5gQw8DpGsVi8NMA95LZRFSBR2qxu3hFfMl5Fq5R8ZWWTVRYJZj4nqYetAUAw5lBnA1KhzFhzFio6CjPGsqlVAEr4Ph11RNynYnfoqvrAOJwC5KiGclJSk/NRfWrRS4zHF8idhWmoejEjW7xf+ynGXT7mbVKRyrIcAftP08tBDcZRV8jpnJK00SSDlo5ANWAzkNUgPUlh8qviEqWQCUqSqpccxL0Qm6Ul6qLBZ6tG2nYWTOtkVoWP2NopMR7OLClLQrMSGGYNlGwP8RMJpPcEVfBveSHUlZTmuh6UOoZirrF2jjswXShQ3qD5gt6RVTsJPRdBIGzG3R/pA5xJFwx00PrA0pOxG0xOFUtT8rblz6WiAYZMtIClqyi1yfElyTDZ+NUqiBTVTGG4acpN3UT+76C4jLehDcVMJSEyUrCgpJKlDKkB3UCpXxOkkMkKuLQYlBWKrHdBr2qO0RDEqmJHKnKQ7lTU3G8TYVSQooQk5QAc7ggku4cl3DeogfAx4wabZl/90M/+AgXKm2zRInFpIchSakcwKagsWe4fUOIGnzErIDrboKGrAHxMTuIhVLUVZUhx+avBP8A8VQUlgFBqk0bw18I7JwhBuQNg1fEQSkMACSWFSWc9SwAeG2A8KhicpUaVDVbvrvDwl7x3p2/PWJGCYrDAiKhaCk1+Hfbv9/w6IjSp/mB8ThwQaV/v+Y1xZZQew06KXDSJPvM60BRAACjVm1y28Y1GI4nh5MsLmLGX9IHxE7ISLn8LCMxPllBp8O23aKbjmGCkBYPw3/1P2Pzj0oTjNWi0znH/aabiCUJJRKeiHqRoVkX7W7wuC4tSVpZeVJu9vKKH5QZw6SpasiQ5+QMRninEmR6YguKV/KfnSO9PrAnCcApCQjMVEkX/mzX8IuJ3DyAClQVuLeRN485Y5StxVolJsC8YQH432MWmEGTlIZZu+2w6fOHzsEhXw8qugcHw08I1/zS0338FaWU5QYmweFzk/tFSTXsO5js7DKSa9aio7P9IsMPhkhADsbkjfYixELDibl7lwEY7jp61BJdII3AcfdPekdQgMyVm1zUHfsI4maoEhiQn9SX132hs2YlioaC4o567x6JZS8U4khE7Is1AFalNQ4D3B1trDkTAoOFAjcVevlGY41Jm+8WspzhRd0vawDdAwgDDYsgulZSe/g0edNapOSM3ybhP09Lwm+X4Yz+E44tNFpCg1/hPnYxbYLHomghBLgOQQxF2/8AU+UYuLQgpvw/nWK3iGKUjmBBTqKvQab9osV1r0/qM5xCZkWySouGy6h7kHau8OKtiJE45yDuxZmfpWguN7jeOhQP6QXPMA7ULVUzMCdIDkqSpgwdyA9A7UJN1UDiDJcgECgLhyopJ8idTrFtJAZ/ifBHUlUsMC5VYMX6l3LmjBvCGYdaEpygM3jGuwuFUijugDavTSsSTuEoWOZArYkW+sP1ezHZlQsXBDvp+fKDZfEZifhWW683zgnEezg/Qojpe3erRXTeGz0OQMwbS/fpDuLAtZfHVNzIBbYt96wSjiMhdFJKTrmS4r2doy6pqknmSQeoIf8AO8cVjEpqT4/RzBoXYDUolLBDkJKiWzKFug1ptE2FWAMi0rTmWUglPxZf1UdkkA1U0SycQlSsqkstCQWykhOYWCmYHpeJsKF5RnUkq1KQUg+ZjJvyAPLw4GV0HMpweYKy6gkuKGlt4kllQQSAjMlJdCSWzgOEvcA9nqIKtp6QEnhyBOXOdedYAIdk0DPlFyw1fpCtPkCSURMSlSkKS4CsqgxSdiBE4AAoA317eURJWSsChDbOB1t+PDlglmv0hMB6Q4cbVh3n+N/MRSEMCFGj7fLxeJUnxu+vqbUEACA1EIWFfynXtDnD7XHfeGPbv8ns0AHXofytj8oTafT5RxhrTTU6Q8uH6efSAAafIcfn5/cUWLwJDgBwXBTuDt1jRuN/s3Z4apCTQ17Cnl4RcJyg7QWeZo4atcwoSDRTFRFBqPFqtG64JwdMhNPiJDq308LxYiWKlnetu30jkwhj2/inrGmTM57Pgbdlxh5aEoL1pU2btteGYfEsog3BsaEA2cbtFDguJFBCVlwDftv+aRziU0iYFoLgpBp5eNo9CEVFUuC1waebMzgIAFdT+kaq3Desd9yoDkOcdRzD7xRcN4qP1EV1OrddIvpU4G0MZHLmAklVQmySLqOrdB6mJV4cGqTlO36f4jmJKDVRY6KF/HeK1fF0oUUqIIDHMPR9oADpaigBKgUlyX0UTsR2FIWPKCgkgPSoo7n1hsjiKFhgQX0u/hAWMWMxSLA0F66/WM8z0xbE3sDTJYIqzeA8Iq8ZwZC9A+9m8dYt0qHj+O8NUCNt7AeP5vHlptcGZieKcPXJSpYLpSKvcaaU22ib2HmqKp5NXSl/NTfnSLX2kQoyFpSxcb3rdvzWM9w5HuxyKIXqU0J/iOiLuDvkfY3uW42+9IruJSEFlKD2F284AwfHFpYLAWLPZX8xZy8bLWCEqDn9BYHqGND5xjpcWIrZmCSRnlEDzrX0MEYQkMnKAwre8UuInKSpQQkZRmpRq6ORWtoPwWIWWYgm7mlBdt/GLcXQi+SDb+W7xLkrWgPTz7wLKnOHLORrp0H3icMSGA6NW/frGQxwG29Kt+WhKuQailTWscBvY/x3h4vtX5jXrAAPMwiVCoejXB84yfHvZrlzyhVN0jUf49fm0bIHrXftHVF9NPxoqE3F2gOH8pCtWG5mLP1022aEKi/Utr4aRIDlmo3PyrpDK3J+fa/06R23n67P9IjnjqfAwASDYU/Nockd/M+o+kR4ZboB8DruInp0HXqPrABHmZunlvrCFafltYWYhnalixIrCDPc+A3PjAB0vuK7P5doSTYa6H5V3f5wkdC1dLbCg6NDlKf8BbzgAYxGt+9+8dApq1Wv8u0PdiKv1bz6GODrrV20/m0ADXY18YSbEmmtusdWNmrRq7P4xwLsRRiBYg6300eABPUejNQaej+kDTxqHGoHf+vSCUpcHT8tX77xxaM2n+vr8vvABn56hmqz3tSzV3v4RzL376pv5iCsfg8wOtfLYv4xXuUKZd/0l2e3rTsY9LBmTSi+S0yVKGfQkkvcEMP5/mDcBxBaCQo8oZh5uQdrQEkGur2FgfsX0jqS7gglILdQWf8ADHSUGcb4ly0NIoJGJUEu5dVSfQDygzFJBDEgg2P3+8VcxJQWekOJLLDCTSlYUhWUvbQ/aNVKcpDkOzl611NOpAjG4NWdaRua/WNskHvSnVtuwji62XEf0liF/q2upvSEPN9GftCTdtqMX6ev3McBIT5O/fby844BEU6WD3L+Xyilx/BUqJIGU7p+o6xf6kPtcP5jYQmpQltWF/pDUmuAMPPwsxFwVp3H1F4iTMChdj/MblckKBcAns99G8vKKXHcGQquVlMXUlh0D76xpHIu4FZh8UpJchKuixttBap6CM0sZF6hnHXLs/VorsRgZku3MHajv5XMDpmhVK3/ADxi6T3QUazCrSwS9WetbQfKcCxNd6fnnGSlYtaWUk28j4aRaYbjSbLSx0Uhmb/Xbt5RnKLAvFmopfcgF/Bo6kHKBR9aerxHh5yV8yCFB6nZ+mkPSzkelK/n5tGYD0mp+n27w0JrbSjV844Q97tpS3eEA5FdNdIAFka/z8g0OfrX6/Z/lHCvr4nX0/DDFP1G3UadmgAeotpzbd+o6RGqTd2rZL/OHIl10L0fr9fCHAAaMn7WteusAClgCjBg1G0HlCCCKadftHQmujO939Lw0UNC4IfX1gAcosbFt/ykcCaAMXcOXYa6x2+tKCthDMliNadO0AHaVahpW+r+JhKVp0rrcuz7RxSCKfy7tpt4RMF1u/S2lX/OkAEQJuGttp/XzjorcC/jX87QlAhyCKgkC/kNYTvQEMGYEMTXeADint2q2+w7R1ydmYaNUnWOoBJ0GgranSE1hXV7Ox/PB4AEN6Maa3er+sdqLCmrb1cDwhqkuwNPHoBoLX8oSUmt6aWLm1PWABk2WFaB/wALtrXWK3F4FwSQLvs+/pFotNHFGvTcfwaQwyhSgdwew1cQJ0BmWUg8zlJAvp39K6NE6FPWzGh8AajUVvFliMK9GO797FtXcRULlKRUVF8uoq1Bt0jvwdRftkUpEhbM4bMAaaF6OPzyikxxdVKHb7bRcIIUklIv9HHKfp/UUs2QsrYBySAD3OsdiaW5TLn2VwpKlrUDlSMo0L/qPlTxjUMNBX5aMx9RAGBl5EBKdKejku1oPbXpe971jyc09cmzM4kEUDeX38Y4nUWIBbxDViRLAMauO2z3EcCVDVNGc+jGtoyA4ki4dxuX0pr4Q5FH9LbH1iMmtwAKChHpv41h2apZhsdz8oAGhIpSlvGmsdCam1KAFTuYWUmgHV31Iduz6wg4Bfagf5fKACOZJBuBV3a4+1fpFXxLhCVPQf7WPd2t0i5N3BANBU19YSUl66XvTXrAm1wBicRw2Yg05hsb+sDoxFWIIPl5hrRupsgKJYBq0O72e4/qKriHDApJzAPorVu4jWOTyBQS5+WqSRsXqD3EHo9pyikwpUP/AC7UH27xleLS1y5ikFVLgijg/PUeEBtG6xqStlUescOxaZiAtBASoOCdNCGrUGhicktVrv330Yxg/ZDixQr3Klcizyvoq3gFW7tvG9URq7Gw0cRzZIaZUS0DTVAEBtj0rW2sFSUZgSPX+IUKIYHCmmjN6uzw1YqN2+TwoUAHQsZQqugal2vHAsEBwbtf5+sKFABMA9Nw9tv7gdSmYVNHGjP07QoUADkCrjTLU1Nn2rCWQKh6G19oUKADpuBrX09TCIY0vT0enaFCgA6lYy5qs4oW7+V462Wz1IF9a9LQoUAD1S3aulOgH1/mIFltTUAu7Fmt6QoUAEipVCx5b2rv4x2UHDjQ6066eUKFABGUUq2nrQeUDTcICVOA7santTyhQoAKvEYQIJUDQ/p079DDMLIdYV2buTc9aQoUdanL0nuV2LqThy4Yso6jpD1ADlqwD3uC9GjsKOQkmMvcuBXY2iNfKNxdm9O1oUKADp22BP8AEJUsW17MK0hQoAEtJ5a1NHsx3jm9rsQ1H1atoUKADrhgK7mx6fhh0tL0Fq0O93pHIUADjJrU9KU8esQTgwc1YdqwoUAGW9tMGky0zP1JIfqFMCPNj5xjYUKO3D8CkdSa/I6g7x6X7P8AETOkpWp81idymrt1p4woUTn4Bn//2Q==";
    
    boton.innerHTML = "Terminar casa";
    boton.className = "button is-warning";
    boton.onclick = terminar_casa; 

    console.log(imagen);

};

const terminar_casa = () => {
    const imagen = document.getElementById("imagen_construir");
    imagen.src ="https://i.ytimg.com/vi/-BzfmgPgl5c/maxresdefault.jpg";    
    boton.innerHTML = "Destruir casa";
    boton.className = "button is-danger"; 
    boton.onclick = destruir_casa;
    console.log(imagen);

};

const destruir_casa = () => {
    const imagen = document.getElementById("imagen_construir");
    imagen.src = "https://minecraft.tools/en/css/img/index/02.jpg"
    boton.innerHTML = "Construir casa";
    boton.className = "button is-primary";
    boton.onclick = construir_casa;

    console.log(imagen);

};

boton.onclick = construir_casa;

