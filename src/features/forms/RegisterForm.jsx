import React, { useState } from "react";
import { registerInputList } from "./inputlist";
import { useFormInput } from "../../hooks/useFormInput";
import { Input } from "../../components/Input";
import { RegisterBtn } from "../../components/Buttons";
import { Flex } from "../../components/Flex";
import { Link } from "react-router-dom";
import { useRegister } from "../../hooks/register,login/useRegister";

function RegisterForm() {
  //react-query
  const { register } = useRegister();

  //기존 작업물-------------------------------------------------------------
  // const [formState, setFormState, handleInputChange] = useFormInput();
  // const handleSubmit = event => {
  //   event.preventDefault();
  //   register(formState);
  //   setFormState({});
  // };
  //기존 작업물-------------------------------------------------------------

  //회원가입시 register에 보낼 정보
  const [registerInfo, setRegisterInfo] = useState({
    email: "",
    password: "",
    nickname: "",
  });

  const changeInputHandler = e => {
    const { value, name } = e.target;
    setRegisterInfo(pre => {
      return { ...pre, [name]: value };
    });
  };

  //회원가입 버튼 클릭시 useRegister에 payload(registerInfo) 전달
  const registerHandler = e => {
    e.preventDefault();
    console.log(registerInfo, "info");
    register(registerInfo);
  };

  //이메일, 비밀번호 형식 정규식 -> 확인해볼것
  const emailRegExp = /^[a-zA-Z0-9+\-\\_.]+@[a-zA-Z0-9\\-]+\.[a-zA-Z0-9\-.]+$/;
  const pwRegExp =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{6,15}$/;

  //이메일 입력값에 따른 검사값 출력
  const emailValidation = () => {
    if (registerInfo.email === "") {
      return "";
    } else if (!emailRegExp.test(registerInfo.email)) {
      return "이메일 형식이 올바르지 않습니다.";
    } else {
      return "";
    }
  };

  //비밀번호 입력값에 따른 검사값 출력
  const pwValidation = () => {
    if (registerInfo.password === "") {
      return "";
    } else if (!pwRegExp.test(registerInfo.password)) {
      return "알파벳, 숫자, 특수문자 조합 6~15글자로 입력해주세요.";
    } else {
      return "";
    }
  };

  //닉네임 빈 값 확인에 따른 검사값 출력
  const nicknameValidation = () => {
    if (registerInfo.nickname === "") {
      return "닉네임을 입력해주세요.";
    } else {
      return "";
    }
  };

  return (
    <Flex as="form" fd="column" gap="10">
      <Link to="/">로고 자리(메인으로 돌아감)</Link>
      <label>이메일</label>
      <input type="email" name="email" onChange={changeInputHandler} />
      <div>{emailValidation()}</div>

      <label>비밀번호</label>
      <input type="password" name="password" onChange={changeInputHandler} />
      <div>
        {pwValidation()}
        {/* {!pwRegExp.test(registerInfo.password)
          ? "알파벳, 숫자, 특수문자 조합 6~15글자로 입력해주세요."
          : null} */}
      </div>

      <label>닉네임</label>
      <input type="text" name="nickname" onChange={changeInputHandler} />
      <div>{nicknameValidation()}</div>

      <button onClick={registerHandler}>회원가입</button>
    </Flex>
  );

  //기존 작업물-------------------------------------------------------------
  // return (
  //   <Flex as="form" onSubmit={handleSubmit} fd="column" gap="10">
  //     <Link to="/">로고 자리(메인으로 돌아감)</Link>
  //     {registerInputList.map((input, index) => (
  //       <Input
  //         key={index}
  //         label={input.label}
  //         inputProps={{
  //           type: input.type,
  //           name: input.name,
  //           value: formState[input.name] || "",
  //           onChange: handleInputChange,
  //         }}
  //       />
  //     ))}
  //     <RegisterBtn type="submit">회원가입</RegisterBtn>
  //   </Flex>
  // );
  //기존 작업물-------------------------------------------------------------
}

export default RegisterForm;
