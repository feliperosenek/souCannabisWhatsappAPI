const puppeteer = require('puppeteer');

async function app(){
    try {

        let options = {
            defaultViewport: {
                width: 1366,
                height: 768,
            },
            headless: false,
        };

        let browser = await puppeteer.launch(options);
        let page = await browser.newPage();
        //await page.goto('https://web.spdataminhaclinica.com.br/login');

        var usernameInput = await page.$("input[name='username']");
        var passwordInput = await page.$("input[name='password']");
        var submit = await page.$("button[type='submit']");
      
        // await usernameInput.click();
        //   await page.keyboard.type("sistemas@soucannabis.ong.br", {
        //     delay: 10
        // });
      
        // await passwordInput.click();
        //   await page.keyboard.type("Qp4jEX5ryf3&9!P#", {
        //     delay: 10
        // });
      
        // await submit.click()
      
        // await page.waitForSelector("#main-navbar")
      
        await page.goto("file:///C:/Users/felip/Downloads/Cadastro%20de%20paciente.html")
      
        var nome = await page.$("input[name='nome']");
        await nome.click();
           await page.keyboard.type("xxxx", {
            delay: 100
        });
        var email = await page.$("input[name='email']");
        await email.click();
             await page.keyboard.type("xxxx", {
            delay: 100
        });
        var ocupacao = await page.$("input[name='ocupacao.descricao']");
        await ocupacao.click();
        await page.keyboard.type("xxxx", {
            delay: 100
        });  
        var nomeResponsavel = await page.$("input[name='nomeResponsavel']");
        await nomeResponsavel.click();
          await page.keyboard.type("xxxx", {
            delay: 100
        });
        var cpfResponsavel = await page.$("input[name='cpfResponsavel']");
        await cpfResponsavel.click();
        await page.keyboard.type("453453543", {
            delay: 100
        });
        var rgResponsavel = await page.$("input[name='rgResponsavel']");
        await rgResponsavel.click();
        await page.keyboard.type("45345354345", {
            delay: 100
        });
        var tipoPessoaFisica = await page.$("#tipoPessoa1");
        var dataNascimento = await page.$("input[name='dataNascimento']");
        var sexoMasc = await page.$("#sexo1");
        var sexoFem = await page.$("#sexo1");
      
        var tipoTel = await page.$("select[class='.js-tipo-telefone']");
        var telefone = await page.$("#telefone]");
        await telefone.click();
          await page.keyboard.type("xxxx", {
            delay: 10
        });
        var butonTel = await page.$("button[class='js-paciente-telefone-btn']");
        await butonTel.click();
      
        var cep = await page.$("input[name='endereco.cep']");
        await cep.click();
          await page.keyboard.type("xxxx", {
            delay: 10
        });
        var endereco = await page.$("input[name='endereco.logradouro']");
        await endereco.click();
          await page.keyboard.type("xxxx", {
            delay: 10
        });
        var numero = await page.$("input[name='endereco.numero']");
        await numero.click();
          await page.keyboard.type("xxxx", {
            delay: 10
        });
        var estado = await page.$("select[id='estado']");
        var cidade = await page.$("select[id='cidade']");
        var complemento = await page.$("input[name='endereco.complemento']");
        await complemento.click();
          await page.keyboard.type("xxxx", {
            delay: 10
        });
        var bairro = await page.$("input[name='endereco.bairro']");
        await bairro.click();
          await page.keyboard.type("xxxx", {
            delay: 10
        });
      

        
    } catch (error) {
        
    }
}

app()