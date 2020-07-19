import CategoryBox from "../atoms/CategoryBox";
import { GameCategory } from "../../types/types";
import { Grid } from "@zeit-ui/react";

const CategoryGroup = ({
    categories,
    onSelectCategory,
}: CategoryGroupProps): JSX.Element => (
    <Grid.Container gap={1} style={{ maxWidth: "18em", margin: "0 auto" }}>
        {categories.map((category, i) => (
            <Grid xs={12} key={i}>
                <CategoryBox category={category} onClick={onSelectCategory} />
            </Grid>
        ))}
    </Grid.Container>
);

type CategoryGroupProps = {
    categories: Array<GameCategory>;
    onSelectCategory: (id: string) => void;
};

export default CategoryGroup;
