import {FC} from "react";
import Section from "@shared/ui/section/section";
import {CLIENTS_DATA} from "@features/clients/clients.mock";
import Text from "@shared/ui/text/text";

const Clients: FC = () => {
    const clients = CLIENTS_DATA;
    return (
        <Section title={"Clients"}>
            {clients.map(item => <Text key={"item"}>{item}</Text>)}
        </Section>
    )
}

export default Clients;