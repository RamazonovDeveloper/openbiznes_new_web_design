import repository from "./repository";

export const companyInfo = () => repository.post("company/info");