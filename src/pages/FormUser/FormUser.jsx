//PACOTE
import Avatar from "avataaars2";

//CSS
import style from "./FormUser.module.css";

//HOOKS
import { useState } from "react";
import { useInsertDocument } from "../../hooks/useInsertDocument";

// Json dos parâmetros
import attributeData from "../../data/attributeOptions.json";

const FormUser = () => {
  const { insertDocument, response } = useInsertDocument("form");

  // parâmetros do avatar
  const [attributes, setAttribute] = useState({
    avatarStyle: "Circle",
    topType: "ShortHairShortRound",
    hairColor: "Black",
    accessoriesType: "Blank",
    facialHairType: "BeardLight",
    facialHairColor: "Black",
    clotheType: "Hoodie",
    clotheColor: "Black",
    eyeType: "Default",
    eyebrowType: "DefaultNatural",
    mouthType: "Default",
    skinColor: "Brown",
  });
  // Tradutor dos atributos
  const translationKeys = {
    avatarStyle: "Estilo do Avatar",
    topType: "Cabelo",
    hairColor: "Cor do Cabelo",
    accessoriesType: "Tipo de Acessório",
    facialHairType: "Tipo de Barba",
    facialHairColor: "Cor da Barba",
    clotheType: "Tipo de Roupa",
    clotheColor: "Cor da Roupa",
    eyeType: "Tipo de olho",
    eyebrowType: "Tipo de Sobrancelha",
    mouthType: "Tipo de Boca",
    skinColor: "Cor de pele",
  };

  const handleAttributeChange = (attribute, value) => {
    setAttribute({ ...attributes, [attribute]: value });
  };

  // traduz os parâmetro para BR no front
  const translateOptionsBR = (category, option) => {
    // JSON teve que ser manipulado para isso.
    return attributeData[category].translations[option] || option;
  };
  //traduz as chaves.
  const translateKeysBR = (attribute) => {
    return translationKeys[attribute] || attribute;
  };

  // State inicial do formulario de perguntas
  const [initialSate] = useState({
    name: "",
    lastName: "",
    email: "",
    age: "",
    studyClass: "",
    input0: null,
    input1: null,
    input2: null,
    input3: null,
    input4: null,
    input5: "",
    input6: "",
    input7: "",
    input8: "",
    input9: null,
    input10: null,
    input11: null,
  });
  // o state que sofrerar alterações do usuário
  const [opcoes, setOpcoes] = useState({ ...initialSate });

  // limpa formualrio.
  const clearForm = () => {
    //state que recebe as respostas, recebe o state com valores vazil e null
    setOpcoes({ ...initialSate });
  };

  const handleInputChange = (event) => {
    // pego o name e value do evento detro de target do input clicado
    const { name, value, type } = event.target;
    // converte de string para boolean
    const valueBo0lean = value === "true" ? true : false;
    setOpcoes((prevState) => ({
      ...prevState, // manter o restante
      // verifica o tipo, se é radio e ai aplica boolean, se não em string mesmo para os textarea
      [name]: type === "radio" ? valueBo0lean : value, // ao inves de add, ele pega um já existente e muda o valor
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    insertDocument({ ...opcoes, ...attributes });

    clearForm();
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className={style.form}>
        {/* Dados pessoais do usuário */}
        <div className={`${style.CardAvatarForm} ${style.cardFrom} `}>
          <h1>Dados do usuário</h1>
          <label className="input-text">
            <span className="title-p">Nome:</span>
            <input
              className={style.inputText}
              type="text"
              placeholder="Seu nome?"
              name="name"
              value={opcoes.name}
              onChange={handleInputChange}
              required
            />
          </label>
          <label className="input-text">
            <span className="title-p">Sobrenome:</span>
            <input
              className={style.inputText}
              type="text"
              placeholder="Seu sobrenome?"
              name="lastName"
              value={opcoes.lastName}
              onChange={handleInputChange}
              required
            />
          </label>
          <label className="input-text">
            <span className="title-p">Email:</span>
            <input
              className={style.inputText}
              type="email"
              placeholder="Seu email?"
              name="email"
              value={opcoes.email}
              onChange={handleInputChange}
              required
            />
          </label>
          <label className="input-text">
            <span className="title-p">Idade:</span>
            <input
              className={style.inputText}
              type="number"
              placeholder="Sua Idade em Anos"
              name="age"
              value={opcoes.age}
              onChange={handleInputChange}
              required
            />
          </label>
          <label className="input-text">
            <span className="title-p">Turma de estudo:</span>
            <input
              className={style.inputText}
              type="text"
              placeholder="Exemplo 1° Ano A"
              name="studyClass"
              value={opcoes.studyClass}
              onChange={handleInputChange}
              required
            />
          </label>
        </div>

        {/* Avatar Form */}
        <div className={`${style.CardAvatarForm} ${style.cardFrom}`}>
          <h1 className="title-component">Crie seu AvatarMind</h1>

          <div className={style.containerAvatar}>
            <Avatar className={style.avatar} {...attributes} />
            {/* Gerar os Selects dinâmicamente */}
            <div className={style.containerSelect}>
              {Object.keys(attributes).map((attribute) => (
                <div className={style.blockSelect} key={attribute}>
                  <label>{translateKeysBR(attribute)}</label>
                  <select value={attributes[attribute]} onChange={(e) => handleAttributeChange(attribute, e.target.value)}>
                    {/* em  attributeData pegue o atributo da vez, entre no objeto com nome options(todos tem) e vem o map*/}
                    {attributeData[attribute].options.map((option) => (
                      <option key={option} value={option}>
                        {/* é chamado o método que traduz os valores */}
                        {translateOptionsBR(attribute, option)}
                      </option>
                    ))}
                  </select>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Área de perguntas */}
        <div className={`${style.CardAvatarForm} ${style.cardFrom}`}>
          <h1>Formulario de Peruntas</h1>
          <p className="title-p">Você tem ideia do que se trata uma identidade?</p>
          <label className={style.inputRadio}>
            <input type="radio" value={true} name="input0" checked={opcoes.input0 === true} onChange={handleInputChange} required />
            Sim
          </label>
          <label className={style.inputRadio}>
            <input type="radio" value={false} name="input0" checked={opcoes.input0 === false} onChange={handleInputChange} required />
            Não
          </label>

          <p className="title-p">Se sente satisfeito com a sua identidade neste momento?</p>
          <label className={style.inputRadio}>
            <input type="radio" value={true} name="input1" checked={opcoes.input1 === true} onChange={handleInputChange} required />
            Sim
          </label>
          <label className={style.inputRadio}>
            <input type="radio" value={false} name="input1" checked={opcoes.input1 === false} onChange={handleInputChange} required />
            Não
          </label>

          <p className="title-p">Seu núcleo familiar exerce influência na construção dessa identidade (suas escolhas)?</p>
          <label className={style.inputRadio}>
            <input type="radio" value={true} name="input2" checked={opcoes.input2 === true} onChange={handleInputChange} required />
            Sim
          </label>
          <label className={style.inputRadio}>
            <input type="radio" value={false} name="input2" checked={opcoes.input2 === false} onChange={handleInputChange} required />
            Não
          </label>

          <p className="title-p">Você se sente confortável com a imagem que reflete para os outros?</p>
          <label className={style.inputRadio}>
            <input type="radio" value={true} name="input3" checked={opcoes.input3 === true} onChange={handleInputChange} required />
            Sim
          </label>
          <label className={style.inputRadio}>
            <input type="radio" value={false} name="input3" checked={opcoes.input3 === false} onChange={handleInputChange} required />
            Não
          </label>

          <p className="title-p">Você se sente amado/aceito por ser quem você é, e por ter assumido essa identidade?</p>
          <label className={style.inputRadio}>
            <input type="radio" value={true} name="input4" checked={opcoes.input4 === true} onChange={handleInputChange} required />
            Sim
          </label>
          <label className={style.inputRadio}>
            <input type="radio" value={false} name="input4" checked={opcoes.input4 === false} onChange={handleInputChange} required />
            Não
          </label>

          <p className="title-p">Oque você sente quando acha que está ansioso?</p>
          <textarea name="input5" rows="6" value={opcoes.input5} onChange={handleInputChange} placeholder="Digite aqui" required></textarea>

          <p className="title-p">Em qual momento do dia você se considera mais ansioso?</p>
          <textarea name="input6" rows="6" value={opcoes.input6} onChange={handleInputChange} placeholder="Digite aqui" required></textarea>

          <p className="title-p">As aulas, provas e assuntos costumam te causar ansiedade?</p>
          <textarea name="input7" rows="6" value={opcoes.input7} onChange={handleInputChange} placeholder="Digite aqui" required></textarea>

          <p className="title-p">Fora da escola quais fatores despertam a sua ansiedade?</p>
          <textarea name="input8" rows="6" value={opcoes.input8} onChange={handleInputChange} placeholder="Digite aqui" required></textarea>

          <p className="title-p">Você possui dificuldades para relaxar mesmo em situações de lazer?</p>
          <label className={style.inputRadio}>
            <input type="radio" value={true} name="input9" checked={opcoes.input9 === true} onChange={handleInputChange} required />
            Sim
          </label>
          <label className={style.inputRadio}>
            <input type="radio" value={false} name="input9" checked={opcoes.input9 === false} onChange={handleInputChange} required />
            Não
          </label>

          <p className="title-p"> Você pensa em várias coisas ao mesmo tempo e se sente frustrado ao não conseguir focar em uma só?</p>
          <label className={style.inputRadio}>
            <input type="radio" value={true} name="input10" checked={opcoes.input10 === true} onChange={handleInputChange} required />
            Sim
          </label>
          <label className={style.inputRadio}>
            <input type="radio" value={false} name="input10" checked={opcoes.input10 === false} onChange={handleInputChange} required />
            Não
          </label>

          <p className="title-p">Você já pesquisou para saber exatamente o que é a ansiedade e como trata-la?</p>
          <label className={style.inputRadio}>
            <input type="radio" value={true} name="input11" checked={opcoes.input11 === true} onChange={handleInputChange} required />
            Sim
          </label>
          <label className={style.inputRadio}>
            <input type="radio" value={false} name="input11" checked={opcoes.input11 === false} onChange={handleInputChange} required />
            Não
          </label>

          {!response.loading && (
            <button className={`btn ${style.btn}`} type="submit">
              Enviar
            </button>
          )}
          {response.loading && (
            <button className={`btn ${style.btn}`} disabled type="submit">
              Aguarde
            </button>
          )}
          {response.error && <p className="error">{response.error}</p>}
        </div>
      </form>
    </div>
  );
};

export default FormUser;
